import { SectionNav } from "./SectionNav";
import { SectionNikolayLazarev } from "./SectionNikolayLazarev";
import { SectionWelcome } from "./SectionWelcome";
import { SectionDivider } from "./SectionDivider";

export const Home = () => {
  return (
    <>
      <SectionWelcome />
      <SectionNav />
      <SectionNikolayLazarev />
      <SectionDivider />
    </>
  );
};
