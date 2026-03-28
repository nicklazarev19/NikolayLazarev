import Image from "next/image";

export const SectionDivider = () => {
  return (
    <section className=" mx-[-16px] lg:mx-[-40px] w-calc(100% + 80px) h-auto">
      <Image
        src="/images/homeDivider.jpg"
        alt="Divider"
        width={1500}
        height={478}
        quality={100}
        className="w-full h-[268px] lg:h-auto object-cover"
      />
    </section>
  );
};
