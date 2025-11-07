// lib/fixImagePath.ts
export function fixImagePath(path: string): string {
  if (!path) return "/placeholder.jpg";
  if (path.startsWith("/assets")) return path;
  if (path.startsWith("assets")) return "/" + path;
  return `/assets${path}`;
}
