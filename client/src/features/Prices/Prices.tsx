import { SectionContactUs } from "@/share/SectionContactUs";
import { type PricesData } from "@/constants/pricesData";
import { SectionPrices } from "./SectionPrices";
import { SectionWelcomePrices } from "./SectionWelcomePrices";

export const Prices = ({ pricesData }: { pricesData: PricesData }) => {
  return (
    <>
      <SectionWelcomePrices />
      <SectionPrices pricesData={pricesData} />
      <SectionContactUs />
    </>
  );
};
