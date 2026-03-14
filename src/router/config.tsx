import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import CasinoReviewPage from "../pages/casino/page";
import SoftwareProvider from "../pages/softwareProvider/SoftwareProvider";
import RouletteStrategy from "../pages/strategy/RouletteStrategy";
import BlackjackStrategy from "../pages/strategy/BlackjackStrategy";
import BaccaratStrategy from "../pages/strategy/BaccaratStrategy";
import RouletteOdds from "../pages/strategy/RouletteOdds";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/providers",
    element: <SoftwareProvider />,
  },
  {
    path: "/roulette-strategy",
    element: <RouletteStrategy />,
  },
  {
    path: "/blackjack-strategy",
    element: <BlackjackStrategy />,
  },
  {
    path: "/roulette-odds",
    element: <RouletteOdds />,
  },
  {
    path: "/baccarat-strategy",
    element: <BaccaratStrategy />,
  },
  {
    path: "/:slug",
    element: <CasinoReviewPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;