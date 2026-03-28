import { SectionContactUs } from "@/share/SectionContactUs";
import { SectionPrices } from "./SectionPrices";
import { SectionWelcomePrices } from "./SectionWelcomePrices";

export const Prices = () => {
  return (
    <>
      <SectionWelcomePrices />
      <SectionPrices />
      <SectionContactUs />
    </>
  );
};
