import { ButtonWriteMe } from "@/share/ButtonWriteMe";
import Image from "next/image";

export const SectionNikolayLazarev = () => {
  return (
    <section className=" bg-[#F5F5F4] mx-[-16px] lg:mx-[-40px]">
      <div className="py-[80px] max-w-[1000px] mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center">
        <div className="w-full px-[16px] lg:w-[573px] max-w-[573px] flex flex-col items-center">
          <h2 className="mt-[50px] lg:mt-0 text-[40px] lg:text-[45px] font-regular font-Newsreader leading-[120%] tracking-[0.38px] text-black">
            Nikolay Lazarev
          </h2>
          <h3 className="mt-[8px] text-[18px] lg:text-[25px] text-center font-light italic font-Newsreader leading-[130%] tracking-[0.38px] text-black">
            International wedding cinematographer known for his refined visual
            style and artistic approach to storytelling.
          </h3>

          <p className="mt-[8px] lg:px-[40px] text-center text-[14px] lg:text-[16px] font-light font-Poppins leading-[130%] tracking-[0.38px] text-black">
            With experience filming weddings and events in diverse locations,
            Nikolay focuses on capturing genuine moments and natural
            interactions. His films combine documentary authenticity with a
            carefully crafted visual composition, creating stories that couples
            can relive for years to come.
          </p>
          <div className="mt-[27px]">
            <ButtonWriteMe />
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/nikolayLazarev.jpg"
            alt="Nikolay Lazarev"
            width={291}
            height={469}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};
