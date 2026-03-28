"use client";
import LeftArrowIcon from "@/assets/icons/arrowLeft25w.svg";
import RightArrowIcon from "@/assets/icons/arrowRight25w.svg";
import Image from "next/image";

interface ButtonScrollSliderProps {
  handlePrev: () => void;
  handleNext: () => void;
  text: string;
}
export const ButtonScrollSlider = ({
  handlePrev,
  handleNext,
  text,
}: ButtonScrollSliderProps) => {
  return (
    <div className="inline-flex flex-row gap-[20px]">
      <button onClick={handlePrev} className="cursor-pointer">
        <Image src={LeftArrowIcon} alt="Left Arrow" width={25} height={2} />
      </button>
      <p className="text-[16px] font-light font-Poppins leading-[130%] tracking-[0.38px] text-black">
        {text}
      </p>
      <button onClick={handleNext} className="cursor-pointer">
        <Image src={RightArrowIcon} alt="Right Arrow" width={25} height={2} />
      </button>
    </div>
  );
};
