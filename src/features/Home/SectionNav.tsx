"use client";
import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/assets/icons/arrowRight.svg";
import { WhiteOval } from "@/share/WhiteOval";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const SectionNav = () => {
  const navItems = [
    {
      text: "Portfolio",
      href: "/portfolio",
      image: "/images/homePortfolio.jpg",
      alt: "home",
    },
    {
      text: "About me",
      href: "/about-me",
      image: "/images/homeAboutMe.jpg",
      alt: "home",
    },
    {
      text: "Contact",
      href: "/contact",
      image: "/images/homeContact.jpg",
      alt: "home",
    },
  ] as const;

  return (
    <div className="flex flex-col items-center my-[50px] lg:mt-[100px] lg:mb-[132px]">
      <div className="w-full max-w-[496px] lg:max-w-[737px]">
        <WhiteOval />
        <h2 className="mt-[20px] text-center text-[30px] lg:text-[45px] font-light font-Newsreader leading-[120%] tracking-[0.38px] text-black">
          Refined Wedding Films. <br />
          Created with a <span className="italic">timeless aesthetic</span> for
          couples who value authentic moments.
        </h2>

        <p className="mt-[20px] text-center text-[14px] lg:text-[18px] font-light font-Poppins leading-[130%] tracking-[0.38px] text-[#4B4B4B]">
          Recognized for a cinematic yet documentary-inspired approach, our
          films blend natural storytelling with elegant visuals. With years of
          experience in wedding and commercial videography, we focus on
          capturing moments that feel genuine, emotional, and lasting.
        </p>
      </div>

      <div className="mt-[50px] lg:mt-[80px] w-full lg:w-full max-w-[1106px]">
        {/* Desktop */}
        <div className="hidden lg:flex flex-row justify-between">
          <NavBlock {...navItems[0]} />
          <div className="mt-0 lg:mt-[46px]">
            <NavBlock {...navItems[1]} />
          </div>
          <NavBlock {...navItems[2]} />
        </div>

        {/* Mobile slider */}
        <div className="lg:hidden">
          <Swiper
            slidesPerView="auto"
            spaceBetween={16}
            loop={false}
            grabCursor={true}
            style={{ overflow: "visible" }}
          >
            {navItems.map((item) => (
              <SwiperSlide key={item.href} style={{ width: "auto" }}>
                <NavBlock {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

const NavBlock = ({
  text,
  href,
  image,
  alt,
  className,
}: {
  text: string;
  href: string;
  image: string;
  alt: string;
  className?: string;
}) => {
  return (
    <div
      className={`relative flex flex-col items-start shrink-0 w-[262px] max-w-[285px] ${
        className ?? ""
      }`}
    >
      <div className="relative w-full aspect-262/336">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 275px) 275px, 262px"
        />
      </div>

      <Link href={href} className="mt-[14px]">
        <div className="flex flex-row items-center">
          <h3 className="text-[20px] font-light font-Poppins leading-[120%] text-black">
            {text}
          </h3>

          <Image
            src={ArrowIcon}
            alt="arrow"
            width={30}
            height={2}
            className="ml-[11px]"
          />
        </div>
      </Link>
    </div>
  );
};
