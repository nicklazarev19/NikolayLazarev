"use client";

import { ParallaxProvider } from "react-scroll-parallax";

type Props = {
  children: React.ReactNode;
};

export const ParallaxProviderClient = ({ children }: Props) => {
  return <ParallaxProvider>{children}</ParallaxProvider>;
};
