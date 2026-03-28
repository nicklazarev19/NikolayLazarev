import { SectionWelcome } from "@/share/SectionWelcome";

export const SectionWelcomePortfolio = () => {
  return (
    <>
      <SectionWelcome
        title="Wedding Videos"
        description="my portfolio"
        sources={[
          {
            src: "/videos/portfolioWelcome/Warsaw_Highlight1807.webm",
            type: "video/webm",
          },
          {
            src: "/videos/portfolioWelcome/Warsaw_Highlight1807.mp4",
            type: "video/mp4",
          },
        ]}
        poster="/images/portfolioMain.jpg"
        height="90dvh"
      />
    </>
  );
};
