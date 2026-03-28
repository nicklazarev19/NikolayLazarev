"use client";

import Image from "next/image";
import ContactUsButton from "@/assets/icons/contactUs.svg";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";

export const SectionContactUs = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [textTint, setTextTint] = useState(0);
  const titleLightness = 68 + textTint * 32;
  const paragraphLightness = 62 + textTint * 30;

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1024px)");
    const onChange = () => setIsMobile(media.matches);

    onChange();
    media.addEventListener("change", onChange);

    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <section className="mx-[-16px] lg:mx-[-40px] relative overflow-hidden h-[478px]">
      <Parallax
        className="absolute inset-[-20%] will-change-transform"
        translateY={isMobile ? [-12, 12] : [-35, 35]}
      >
        <Image
          src="/images/homeContactUs.jpg"
          alt="home contact us"
          fill
          className="object-cover object-[center_6%] lg:object-[center_20%]"
          priority
          quality={100}
        />
      </Parallax>

      <div className="absolute inset-0 bg-black/30 z-1" />

      <Parallax
        className="relative z-10 h-full"
        translateY={isMobile ? [0, 0] : [18, -18]}
        onProgressChange={(progress) => {
          const centered = 1 - Math.abs(progress - 0.5) * 2;
          const clamped = Math.max(0, Math.min(1, centered));
          setTextTint(clamped);
        }}
      >
        <div className="flex flex-col items-center justify-center h-full px-4">
          <div className="max-w-[826px] mx-auto text-center">
            <h2
              className="text-[30px] lg:text-[40px] font-semibold font-Newsreader italic
                leading-[130%] lg:leading-[100%] drop-shadow-lg transition-colors duration-150"
              style={{
                color: `hsl(32 36% ${titleLightness}%)`,
              }}
            >
              Let&apos;s create something beautiful together
            </h2>
            <p
              className="mt-[10px] text-[16px] lg:text-[20px] font-light font-Poppins italic
                leading-[150%] lg:leading-[100%] drop-shadow-md transition-colors duration-150"
              style={{
                color: `hsl(28 22% ${paragraphLightness}% / 0.95)`,
              }}
            >
              Tell me about your wedding day, and I&apos;ll help capture every
              moment that matters.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="mt-[20px] w-[200px] h-[47px] cursor-pointer"
          >
            <Image
              src={ContactUsButton}
              alt="home contact us button"
              width={200}
              height={47}
            />
          </Link>
        </div>
      </Parallax>
    </section>
  );
};
