"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import { VideoModal } from "./VideoModal";
import {
  portfolioData,
  portfolioItemThumbnail,
  resolvePortfolioItemThumbnail,
  portfolioItemToVideoSources,
} from "@/constants/portfolioData";

import Link from "next/link";
import { ButtonScrollSlider } from "./ButtonScrollSlider";

export const SliderPortfolio = () => {
  const doublePortfolioData = [...portfolioData, ...portfolioData];
  const swiperRef = useRef<SwiperRef>(null);
  interface ModalState {
    itemId: number;
    title: string;
    poster?: string;
    sources: { label: string; src: string }[];
  }

  const [modal, setModal] = useState<ModalState | null>(null);

  const handlePrev = () => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;
    swiper.autoplay.stop();
    swiper.slidePrev();
  };

  const handleNext = () => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;
    swiper.autoplay.stop();
    swiper.slideNext();
  };

  const openModal = (item: (typeof portfolioData)[number]) => {
    const sources = portfolioItemToVideoSources(item);
    if (sources.length > 0) {
      setModal({
        itemId: item.id,
        title: item.place,
        poster: portfolioItemThumbnail(item),
        sources,
      });

      void resolvePortfolioItemThumbnail(item).then((resolvedPoster) => {
        setModal((prev) =>
          prev && prev.itemId === item.id
            ? { ...prev, poster: resolvedPoster }
            : prev,
        );
      });
    }
  };

  return (
    <div className="mx-[-16px] lg:mx-[-40px] h-auto my-[71px]">
      <div className="flex flex-row px-[16px] lg:px-[40px]">
        <div className="relative left-[50%] translate-x-[-50%]">
          <ButtonScrollSlider
            text="Scroll to explore"
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </div>

        <Link
          href="/portfolio"
          className="hidden md:flex ml-auto shrink-0 text-[18px] font-medium italic font-Newsreader leading-[130%] tracking-[0.38px] text-black cursor-pointer z-1000"
        >
          View all films
        </Link>
      </div>

      <Swiper
        ref={swiperRef}
        className="mt-[30px]"
        slidesPerView={1.15}
        spaceBetween={16}
        centeredSlides
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        loop
        initialSlide={1}
        grabCursor
        breakpoints={{
          1024: {
            slidesPerView: "auto",
            spaceBetween: 24,
          },
        }}
      >
        {doublePortfolioData.map((item, idx) => (
          <SwiperSlide
            key={`${item.id}-${idx}`}
            className="md:w-[450px]! min-[880px]:w-[500px]! lg:w-[550px]! min-[1150px]:w-[610px]! xl:w-[668px]!"
          >
            <VideoItem
              place={item.place}
              item={item}
              onClick={() => openModal(item)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {modal && (
        <VideoModal
          isOpen={!!modal}
          onClose={() => setModal(null)}
          title={modal.title}
          poster={modal.poster}
          sources={modal.sources}
        />
      )}
    </div>
  );
};

interface VideoItemProps {
  item: (typeof portfolioData)[number];
  place: string;
  onClick: () => void;
}

const VideoItem = ({ item, place, onClick }: VideoItemProps) => {
  const [hover, setHover] = useState(false);
  const [poster, setPoster] = useState(() => portfolioItemThumbnail(item));

  useEffect(() => {
    let cancelled = false;
    void resolvePortfolioItemThumbnail(item).then((resolved) => {
      if (!cancelled) setPoster(resolved);
    });
    return () => {
      cancelled = true;
    };
  }, [item]);

  return (
    <button
      className="relative w-full flex flex-col items-center"
      style={{ cursor: "url('/images/cursorPointer.png') 28 28, pointer" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div className="relative w-full aspect-668/330 overflow-hidden bg-black">
        <Image
          src={poster}
          alt={place}
          width={668}
          height={330}
          className="object-cover w-full h-full"
          quality={100}
        />
        <div
          className={`absolute inset-[25px] bg-[#F7F1EE]/70 hidden lg:flex flex-col items-center justify-center 
            transition-opacity duration-300 ease-in-out ${
              hover ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          <Image
            src={poster}
            alt="Preview"
            width={159}
            height={79}
            className="object-cover w-[159px] h-[79px]"
          />
          <p className=" md:flex mt-[17px] text-[16px] text-center font-light font-Poppins leading-[130%] tracking-[0.38px] text-black">
            Watch the film
          </p>
        </div>
      </div>

      <h2 className="mt-[20px] text-[24px] md:mt-[25px] md:text-[32px] lg:mt-[30px] lg:text-[38px] xl:text-[45px] font-regular font-Newsreader leading-[120%] tracking-[0.38px] text-black">
        {place}
      </h2>
    </button>
  );
};
