"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export const ScrollToTopOnRoute = () => {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};
