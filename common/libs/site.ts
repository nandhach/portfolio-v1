// Next.js prefixes Link/router URLs. Public assets and plain HTML URLs need this.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const withBasePath = (path: string): string => {
  if (!path.startsWith("/") || path.startsWith("//")) return path;
  if (BASE_PATH && (path === BASE_PATH || path.startsWith(`${BASE_PATH}/`))) {
    return path;
  }
  return `${BASE_PATH}${path}`;
};
