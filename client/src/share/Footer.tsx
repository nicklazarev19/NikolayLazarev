import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const linksStyle =
    "relative inline-block text-[14px] lg:text-[16px] font-regular font-Poppins leading-[130%] tracking-[1.5px] uppercase text-[#000000]";
  const linksFillStyle =
    "absolute inset-0 w-0 overflow-hidden whitespace-nowrap text-[#8F7B5A] transition-[width] duration-500 ease-out group-hover:w-full";

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="mt-[50px] lg:mt-[56px] mb-[50px] lg:mb-[17.5px] max-w-[1360px] w-full mx-auto">
      <h2 className="text-[30px] font-extralight font-ClashDisplay leading-[23.4px] tracking-[1.63px] text-[#4B4B4B]">
        NIKOLAY LAZAREV
      </h2>

      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="w-full max-w-[635px] mt-[25px]">
          <p className="text-[14px] lg:text-[16px] font-light font-Poppins leading-[130%] tracking-[0.38px] text-[#4B4B4B]">
            Creating cinematic wedding films that capture genuine emotions and
            meaningful moments. With a refined and documentary-inspired
            approach, each film is thoughtfully crafted to preserve the
            atmosphere and beauty of your wedding day for years to come.
          </p>
        </div>
        <div className="flex flex-row md:flex-col md:mt-auto mt-[30px] w-full md:w-auto items-end justify-between md:gap-[5px] md:mb-[5px]">
          <Link href="/portfolio" className={`${linksStyle} group`}>
            <span>Portfolio</span>
            <span className={linksFillStyle} aria-hidden="true">
              Portfolio
            </span>
          </Link>
          <Link href="/about" className={`${linksStyle} group`}>
            <span>About</span>
            <span className={linksFillStyle} aria-hidden="true">
              About
            </span>
          </Link>
          <Link href="/contact-us" className={`${linksStyle} group`}>
            <span>Contact</span>
            <span className={linksFillStyle} aria-hidden="true">
              Contact
            </span>
          </Link>
        </div>
      </div>

      <div
        className="mt-[60px] mx-auto w-fit grid grid-cols-1 sm:grid-cols-2 sm:gap-x-[15px] justify-items-center
      lg:w-auto gap-[15px] lg:flex lg:flex-row lg:items-center lg:justify-center"
      >
        <div className="w-[206px] h-[206px] overflow-hidden relative">
          <Image
            src="/images/footerImage1.jpg"
            alt="footer-1"
            fill
            sizes="206px"
            quality={100}
            className="object-cover"
          />
        </div>

        <div className="w-[206px] h-[206px] overflow-hidden relative">
          <Image
            src="/images/footerImage2.jpg"
            alt="footer-2"
            fill
            sizes="206px"
            quality={100}
            className="object-cover"
          />
        </div>

        <div className="w-[206px] h-[206px] overflow-hidden relative">
          <Image
            src="/images/footerImage3.jpg"
            alt="footer-3"
            fill
            sizes="206px"
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="w-[206px] h-[206px] overflow-hidden relative">
          <Image
            src="/images/footerImage4.jpg"
            alt="footer-4"
            fill
            sizes="206px"
            quality={100}
            className="object-cover"
          />
        </div>
      </div>

      <p
        className="mt-[60px] text-[10px] font-light font-Poppins 
      leading-[18px] tracking-[0.25px] text-center text-[#4C4C4B99]/60"
      >
        ©{getCurrentYear()} NIKOLAY LAZAREV. All Rights Reserved. 
      </p>
    </footer>
  );
};
