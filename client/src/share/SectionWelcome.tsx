"use client";
import { VideoBg } from "@/share/VideoBg";
import VerticalOvalDesktop from "@/assets/icons/verticaloval.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

interface SectionWelcomeProps {
  title?: string;
  description?: string;
  sources?: {
    src: string;
    type: string;
  }[];
  poster: string;
  height?: string;
  darken?: boolean;
  posterPriority?: boolean;
  posterUnoptimized?: boolean;
}

export const SectionWelcome = ({
  title,
  description,
  sources,
  poster,
  height = "100dvh",
  darken = true,
  posterPriority = true,
  posterUnoptimized,
}: SectionWelcomeProps) => {
  const heroTitle =
    "lg:text-[50px] font-Newsreader italic leading-[100%] text-white whitespace-nowrap";

  return (
    <section className="mx-[-40px] overflow-hidden">
      <div
        className="relative w-full h-[50dvh] lg:h-(--section-welcome-lg-h)"
        style={{ "--section-welcome-lg-h": height } as React.CSSProperties}
      >
        {darken && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />
        )}
        <VideoBg
          sources={sources ?? []}
          poster={poster}
          posterPriority={posterPriority}
          posterUnoptimized={posterUnoptimized}
        />
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="absolute top-[45%] lg:top-[68%] left-[50%] translate-x-[-50%] flex flex-col items-center justify-center z-100"
        >
          {title && (
            <h2 className={`${heroTitle} font-medium text-[30px]`}>{title}</h2>
          )}
          {description && (
            <p
              className={`mt-[5px] lg:mt-[10px] ${heroTitle} font-extralight text-[25px]`}
            >
              {description}
            </p>
          )}
          {(title || description) && (
            <motion.div
              initial={fadeUp.initial}
              animate={fadeUp.animate}
              transition={{ ...fadeUp.transition, delay: 0.45 }}
              className="mt-[5px] lg:mt-[10px]"
            >
              <Image
                src={VerticalOvalDesktop}
                alt="Oval"
                width={32}
                height={55}
                className="w-[15px] h-[25px] lg:w-[32px] lg:h-[55px]"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
