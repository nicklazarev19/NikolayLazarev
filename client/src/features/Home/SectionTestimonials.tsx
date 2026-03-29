"use client";
import { ButtonScrollSlider } from "@/share/ButtonScrollSlider";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import type { SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { testimonialsData } from "@/constants/testimonialsData";

export const SectionTestimonials = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const handlePrev = () => {
    swiperRef.current?.swiper?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.swiper?.slideNext();
  };

  return (
    <section className="mt-[80px] mb-[114px]">
      <h3
        className="text-center text-[20px] lg:text-[30px] font-regular font-Newsreader italic 
      leading-[120%] tracking-[0.64px] text-[#4B4B4B] "
      >
        from our couples:
      </h3>
      <h2
        className="mt-[15px] text-center text-[30px] lg:text-[45px] font-light font-Newsreader 
      leading-[120%] tracking-[0.64px] text-[#000000]"
      >
        TESTIMONIALS
      </h2>

      <div className="mt-[45px]">
        <Swiper
          ref={swiperRef}
          modules={[EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop
          slidesPerView={1}
          spaceBetween={24}
          speed={600}
          className="max-w-[901px] mx-auto"
        >
          {testimonialsData.map((item, idx) => (
            <SwiperSlide key={`${item.couple}-${idx}`}>
              <div className="flex flex-col lg:flex-row">
                <div className="w-[134px] h-[134px] md:w-[206px] md:h-[206px] overflow-hidden shrink-0 lg:mx-0">
                  <Image
                    src={item.image}
                    alt={item.couple}
                    width={206}
                    height={206}
                    className="w-[134px] h-[134px] object-cover md:w-full md:h-full"
                    quality={100}
                  />
                </div>
                <div className="px-[30px] py-[29px] md:px-[30px] md:py-[32px] bg-[#F5F5F4]">
                  <h4
                    className="text-[30px] lg:text-[40px] font-regular font-Newsreader italic 
                  leading-[120%] tracking-[0.64px] text-[#000000]"
                  >
                    {item.couple}{" "}
                  </h4>
                  <p
                    className="mt-[10px] text-[14px] lg:text-[16px] font-light font-Poppins leading-[130%] 
                  tracking-[0.38px] text-[#4B4B4B]"
                  >
                    &quot;{item.quote}&quot;
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-[29px] max-w-[901px] mx-auto flex justify-center lg:justify-start">
          <ButtonScrollSlider
            text="View more"
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </div>
      </div>
    </section>
  );
};
