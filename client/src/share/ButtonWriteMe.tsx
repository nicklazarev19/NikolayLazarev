import Link from "next/link";

export const ButtonWriteMe = () => {
  return (
    <Link
      href="/contact-us"
      className="group relative inline-flex items-center justify-center w-[162px] h-[36px] text-black text-[16px] 
      leading-[100%] tracking-[0.38px] border-[1.5px] border-black/50 rounded-[1px]"
    >
      <span
        className="pointer-events-none absolute -inset-[2px] rounded-sm z-1 origin-center transition-transform duration-500 ease-out group-hover:scale-x-0"
        style={{
          background:
            "linear-gradient(to right, transparent, #F5F5F4 30%, #F5F5F4 70%, transparent)",
        }}
      />
      <span className="relative z-2 font-Poppins font-extralight italic">
        Write me
      </span>
    </Link>
  );
};
