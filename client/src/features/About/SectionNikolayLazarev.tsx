"use client";
import { ButtonWriteMe } from "@/share/ButtonWriteMe";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

export const SectionNikolayLazarev = () => {
  return (
    <section
      className="relative top-[-196px] lg:top-[-225px] mb-[-196px] lg:mb-[-225px] max-w-[1130px] w-full mx-auto flex 
    flex-col gap-[40px] lg:gap-0 lg:flex-row items-center justify-between"
    >
      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={{ ...fadeUp.transition, delay: 0.1 }}
        className="overflow-hidden z-30"
      >
        <Image
          src="/images/nikolayLazarev.jpg"
          alt="Nikolay Lazarev"
          width={438}
          height={704}
          quality={100}
          className="w-[270px] h-[434px] lg:w-full lg:h-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={fadeUp.initial}
        whileInView={fadeUp.whileInView}
        viewport={fadeUp.viewport}
        transition={{ ...fadeUp.transition, delay: 0.25 }}
        className="relative lg:top-[90px] w-full px-[16px] lg:w-[573px] max-w-[573px] flex flex-col items-center"
      >
        <h2
          className="text-[40px] lg:text-[45px] font-regular font-Newsreader 
        leading-[120%] tracking-[0.38px] text-black"
        >
          Nikolay Lazarev
        </h2>
        <h3
          className="mt-[8px] text-[18px] lg:text-[25px] text-center font-light 
        italic font-Newsreader leading-[130%] tracking-[0.38px] text-black"
        >
          International wedding cinematographer known for his refined visual
          style and artistic approach to storytelling.{" "}
        </h3>
        <p
          className="mt-[8px] text-[14px] lg:text-[16px] text-center font-light font-Poppins 
        leading-[130%] tracking-[0.38px] text-[#4B4B4B]"
        >
          With experience filming weddings and events in diverse locations,
          Nikolay focuses on capturing genuine moments and natural interactions.
          His films combine documentary authenticity with a carefully crafted
          visual composition, creating stories that couples can relive for years
          to come.
        </p>
        <div className="mt-[27px]">
          <ButtonWriteMe />
        </div>
      </motion.div>
    </section>
  );
};
