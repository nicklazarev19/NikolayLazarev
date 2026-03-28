import { SectionNav } from "./SectionNav";
import { SectionNikolayLazarev } from "./SectionNikolayLazarev";
import { SectionWelcomeHome } from "./SectionWelcomeHome";
import { SectionDivider } from "./SectionDivider";
import { SliderPortfolio } from "@/share/SliderPortfolio";
import { SectionPhilosophy } from "./SectionPhilosophy";
import { SectionTestimonials } from "./SectionTestimonials";
import { SectionContactUs } from "@/share/SectionContactUs";

export const Home = () => {
  return (
    <>
      <SectionWelcomeHome />
      <SectionNav />
      <SectionNikolayLazarev />
      <SectionDivider />
      <SliderPortfolio />
      <SectionPhilosophy />
      <SectionTestimonials />
      <SectionContactUs />
    </>
  );
};
