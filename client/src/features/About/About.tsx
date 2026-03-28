import { SliderPortfolio } from "@/share/SliderPortfolio";
import { SectionGoal } from "./SectionGoal";
import { SectionNikolayLazarev } from "./SectionNikolayLazarev";
import { SectionWelcomeAbout } from "./SectionWelcomeAbout";

export const About = () => {
  return (
    <>
      <SectionWelcomeAbout />
      <SectionNikolayLazarev />
      <SectionGoal />
      <div className="lg:pb-[20px]">
        <SliderPortfolio />
      </div>
    </>
  );
};
