import { SectionNav } from "./SectionNav";
import { SectionNikolayLazarev } from "./SectionNikolayLazarev";
import { SectionWelcome } from "./SectionWelcome";

export const Home = () => {
  return (
    <>
      <SectionWelcome />
      <SectionNav />
      <SectionNikolayLazarev />
    </>
  );
};
