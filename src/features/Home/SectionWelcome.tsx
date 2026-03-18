"use client";
import { VideoBg } from "@/share/VideoBg";
import VerticalOvalDesktop from "@/assets/icons/verticaloval.svg";
import Image from "next/image";

const heroTitle =
  "lg:text-[50px] font-Newsreader italic leading-[100%] text-white whitespace-nowrap";

export const SectionWelcome = () => {
  return (
    <div className="mx-[-40px] overflow-hidden">
      <div className="relative w-full h-[50dvh] lg:h-dvh">
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />
        <VideoBg
          sources={[
            {
              src: "/videos/homeWelcome/homeWelcome.webm",
              type: "video/webm",
            },
            {
              src: "/videos/homeWelcome/homeWelcome.mp4",
              type: "video/mp4",
            },
          ]}
          poster="/images/homePrev.jpg"
        />
        <div className="absolute  top-[45%] lg:top-[68%] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center z-100">
          <h2 className={`${heroTitle} font-medium text-[30px]`}>
            Wedding Videographer
          </h2>
          <p
            className={`mt-[5px] lg:mt-[10px] ${heroTitle} font-extralight text-[25px]`}
          >
            love in motion
          </p>
          <Image
            src={VerticalOvalDesktop}
            alt="Oval"
            width={32}
            height={55}
            className="mt-[5px] lg:mt-[10px] w-[15px] h-[25px] lg:w-[32px] lg:h-[55px]"
          />
        </div>
      </div>
    </div>
  );
};
