import { SectionWelcome } from "@/share/SectionWelcome";

export const SectionWelcomeHome = () => {
  return (
    <>
      <SectionWelcome
        title="Wedding Videographer"
        description="love in motion"
        sources={[
          { src: "/videos/homeWelcome/homeWelcome.webm", type: "video/webm" },
          { src: "/videos/homeWelcome/homeWelcome.mp4", type: "video/mp4" },
        ]}
        poster="/images/homePrev.jpg"
      />
    </>
  );
};
