// GitHub Pages supplies these at build time for either /kyumin or a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export function assetPath(path: string) {
  return basePath + path;
}
