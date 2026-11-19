/**
 * Base path configured by Astro (`/` in dev, `/repo` on GitHub Pages project sites).
 * Comes with a trailing slash, so it is removed to build clean URLs.
 */
const base = import.meta.env.BASE_URL.replace(/\/+$/, "");

/**
 * Build a public URL for a file inside `public/`, honoring Astro's base path
 * and percent-encoding every path segment (spaces, parentheses, etc.).
 *
 * @example
 * assetUrl("seccion 1/foto (1).avif") // "/Cenape/seccion%201/foto%20(1).avif"
 */
export const assetUrl = (path: string) =>
  `${base}/${path
    .replace(/^\/+/, "")
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
