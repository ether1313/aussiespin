import { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useNavigationType,
  useRoutes,
  type NavigateFunction,
} from "react-router-dom";
import routes from "./config";

let navigateResolver: (navigate: ReturnType<typeof useNavigate>) => void;
const scrollPositions = new Map<string, number>();
const MAX_SCROLL_ENTRIES = 120;
const HASH_SCROLL_RETRY_MS = 120;
const HASH_SCROLL_MAX_RETRIES = 10;

declare global {
  interface Window {
    REACT_APP_NAVIGATE: ReturnType<typeof useNavigate>;
  }
}

export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  navigateResolver = resolve;
});

export function AppRoutes() {
  const element = useRoutes(routes);
  const navigate = useNavigate();
  const location = useLocation();
  const navigationType = useNavigationType();
  const entryKey = location.key || "default";
  const locationStorageKey = `${location.pathname}${location.search}`;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    return () => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "auto";
      }
    };
  }, []);

  useEffect(() => {
    if (navigationType === "POP") {
      const savedY = scrollPositions.get(entryKey) ?? scrollPositions.get(locationStorageKey) ?? 0;
      window.scrollTo({ top: savedY, left: 0, behavior: "auto" });
      return;
    }

    if (location.hash) {
      const anchorId = decodeURIComponent(location.hash.slice(1));
      const smoothBehavior =
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth";
      let retries = 0;
      const tryScrollToAnchor = () => {
        const anchorElement = document.getElementById(anchorId);
        if (anchorElement) {
          anchorElement.scrollIntoView({ block: "start", behavior: smoothBehavior });
          return;
        }
        if (retries >= HASH_SCROLL_MAX_RETRIES) {
          return;
        }
        retries += 1;
        window.setTimeout(tryScrollToAnchor, HASH_SCROLL_RETRY_MS);
      };
      tryScrollToAnchor();
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [entryKey, location.hash, locationStorageKey, navigationType]);

  useEffect(() => {
    return () => {
      scrollPositions.set(entryKey, window.scrollY);
      scrollPositions.set(locationStorageKey, window.scrollY);
      if (scrollPositions.size > MAX_SCROLL_ENTRIES) {
        const oldestEntry = scrollPositions.keys().next().value;
        if (oldestEntry) {
          scrollPositions.delete(oldestEntry);
        }
      }
    };
  }, [entryKey, locationStorageKey]);

  useEffect(() => {
    window.REACT_APP_NAVIGATE = navigate;
    if (navigateResolver) {
      navigateResolver(window.REACT_APP_NAVIGATE);
    }
  }, [navigate]);
  return element;
}
