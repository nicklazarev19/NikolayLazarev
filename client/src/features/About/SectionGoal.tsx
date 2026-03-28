export const SectionGoal = () => {
  const textStyles =
    "text-left text-[14px] lg:text-[16px] font-light font-Poppins leading-[130%] tracking-[0.38px] text-black";
  return (
    <section className="lg:mt-[90px] mt-[50px] py-[50px] lg:py-[71px] mx-[-16px] lg:mx-[-40px] bg-[#F5F5F4]">
      <div
        className="max-w-[1130px] w-full mx-auto flex flex-col 
    lg:flex-row items-center justify-between px-[16px] lg:px-[40px] lg:gap-0 gap-[25px]"
      >
        <div className="w-full max-w-[561px]">
          <h4
            className="text-left text-[30px] lg:text-[40px] font-light font-Newsreader italic 
          leading-[120%] tracking-[0.64px] text-black"
          >
            International{" "}
            <span className="font-normal">wedding cinematographer</span> focused
            on capturing authentic moments through elegant, cinematic
            storytelling.
          </h4>
        </div>
        <div className="w-full lg:w-[554px] max-w-[554px] flex flex-col gap-[34px] items-center">
          <p className={textStyles}>
            Every wedding is a unique story filled with emotion, atmosphere, and
            meaningful moments. My approach is calm and unobtrusive, allowing
            couples to stay present in the moment while I document the day
            naturally. I focus on capturing genuine interactions, small details,
            and the overall feeling of the celebration.
          </p>
          <p className={textStyles}>
            Each film is thoughtfully crafted to reflect the personality of
            every couple and the beauty of their wedding day. By combining
            documentary storytelling with refined cinematic visuals, I create
            timeless films that allow couples to relive their most important
            memories for years to come.
          </p>
        </div>
      </div>
    </section>
  );
};
