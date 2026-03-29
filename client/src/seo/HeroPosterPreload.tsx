import { preload } from "react-dom";

export function HeroPosterPreload({ href }: { href: string }) {
  preload(href, { as: "image", fetchPriority: "high" });
  return null;
}
