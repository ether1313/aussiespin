import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

const SITE_URL = "https://www.aussiespin.net";
const routerConfigPath = path.join(rootDir, "src", "router", "config.tsx");
const casinoPagePath = path.join(rootDir, "src", "pages", "casino", "page.tsx");

const STATIC_EXCLUDE = new Set(["*", "/:slug"]);

function extractStaticRoutes(content) {
  const pathMatches = [...content.matchAll(/path:\s*["'`]([^"'`]+)["'`]/g)];
  return pathMatches
    .map((match) => match[1].trim())
    .filter((routePath) => routePath.startsWith("/"))
    .filter((routePath) => !routePath.includes(":"))
    .filter((routePath) => !STATIC_EXCLUDE.has(routePath));
}

function extractCasinoSlugs(content) {
  const slugMatches = [...content.matchAll(/slug:\s*["'`]([a-z0-9-]+)["'`]/gi)];
  return slugMatches.map((match) => `/${match[1].trim()}`);
}

function uniquePaths(paths) {
  return [...new Set(paths)].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });
}

function buildSitemapXml(paths) {
  const lastmod = new Date().toISOString().split("T")[0];
  const urlEntries = paths
    .map((pathname) => {
      const url = pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
      const priority = pathname === "/" ? "1.0" : pathname.split("/").length > 2 ? "0.7" : "0.8";
      return [
        "  <url>",
        `    <loc>${url}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        "    <changefreq>daily</changefreq>",
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlEntries,
    "</urlset>",
    "",
  ].join("\n");
}

function buildRobotsTxt() {
  return [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");
}

async function main() {
  const [routerContent, casinoPageContent] = await Promise.all([
    readFile(routerConfigPath, "utf-8"),
    readFile(casinoPagePath, "utf-8"),
  ]);

  const staticRoutes = extractStaticRoutes(routerContent);
  const casinoSlugs = extractCasinoSlugs(casinoPageContent);
  const allPaths = uniquePaths(["/", ...staticRoutes, ...casinoSlugs]);

  const sitemapXml = buildSitemapXml(allPaths);
  const robotsTxt = buildRobotsTxt();

  await mkdir(publicDir, { recursive: true });
  await Promise.all([
    writeFile(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf-8"),
    writeFile(path.join(publicDir, "robots.txt"), robotsTxt, "utf-8"),
  ]);

  console.log(`Generated sitemap.xml with ${allPaths.length} URLs`);
  console.log("Generated robots.txt");
}

main().catch((error) => {
  console.error("Failed to generate SEO files:", error);
  process.exit(1);
});
