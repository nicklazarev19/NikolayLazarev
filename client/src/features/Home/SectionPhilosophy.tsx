export const SectionPhilosophy = () => {
  const textStyles =
    "text-center text-[14px] lg:text-[16px] font-light font-Poppins leading-[130%] tracking-[0.38px] text-black";

  const titleStyles =
    "text-[20px] lg:text-[24px] font-regular font-Newsreader leading-[120%] tracking-[0.64px] text-[#4B4B4B]";

  return (
    <section className="relative py-[50px] lg:py-[96px] mx-[-16px] lg:mx-[-40px] bg-[#F7F1EE]">
      <h2
        className={`xl:flex hidden absolute top-[50%] translate-y-[-50%] left-[-56px] -rotate-90 ${titleStyles}`}
      >
        OUR PHILOSOPHY
      </h2>

      <h2
        className={`xl:hidden flex ${titleStyles} mb-[35px] text-center justify-center items-center`}
      >
        OUR PHILOSOPHY
      </h2>
      <div className="xl:flex hidden absolute top-[50%] translate-y-[-50%] right-[-24px] -rotate-90">
        <Divider />
      </div>

      {/* Container */}
      <div
        className="grid grid-cols-1 w-full px-[16px] lg:px-0 max-w-[1167px] mx-auto 
      lg:grid-cols-2 items-center justify-center gap-[40px] lg:gap-[26px] xl:gap-[66px]"
      >
        <div className=" w-full max-w-[543px] xl:w-[543px] mx-auto">
          <p className={textStyles}>
            I believe that wedding films should be delivered while the emotions
            of the day are still fresh. That’s why I focus on providing a
            thoughtful yet efficient turnaround time without compromising
            quality. Each film is carefully edited to reflect the atmosphere,
            details, and genuine moments of the celebration, allowing couples to
            relive their day soon after it happens.
          </p>
        </div>
        <div className="w-full max-w-[558px] xl:w-[558px] mx-auto">
          <p className={textStyles}>
            Whether you are comfortable in front of the camera or experiencing
            it for the first time, I aim to make the process feel natural and
            relaxed. I understand that being filmed can sometimes feel
            unfamiliar, so my approach is calm and unobtrusive. My goal is not
            only to create beautiful films, but also to ensure that the
            experience itself feels enjoyable and authentic.
          </p>
        </div>
      </div>

      <div className="xl:hidden flex mt-[35px] justify-center items-center">
        <Divider />
      </div>
    </section>
  );
};

const Divider = () => {
  return (
    <div className="flex items-center justify-center gap-[10px]">
      <span className="w-[50px] h-px bg-[#4B4B4B] rounded-full" />
      <span className="w-[8.22px] h-[4.11px] overflow-hidden">
        <span className="block w-[8.22px] h-[8.22px] bg-[#4B4B4B] rounded-full" />
      </span>
      <span className="w-[50px] h-px bg-[#4B4B4B] rounded-full" />
    </div>
  );
};
