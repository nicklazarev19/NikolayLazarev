"use client";
import { LazyVideo } from "lazyvid";
import { useEffect, useState } from "react";

export const SectionDivider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 999px)");
    const onChange = () => setIsMobile(media.matches);

    onChange();
    media.addEventListener("change", onChange);

    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <section className=" mx-[-16px] lg:mx-[-40px] w-calc(100% + 80px) h-auto">
      {isMobile ? (
        <div className="w-full h-[500px] overflow-hidden">
          <VideoDivider
            sources={[
              {
                src: "/videos/videoDivider/mobile_videoDivider.webm",
                type: "video/webm",
              },
              {
                src: "/videos/videoDivider/mobile_videoDivider.mp4",
                type: "video/mp4",
              },
            ]}
          />
        </div>
      ) : (
        <div className="w-full h-[478px] overflow-hidden">
          <VideoDivider
            sources={[
              {
                src: "/videos/videoDivider/videoDivider.webm",
                type: "video/webm",
              },
              {
                src: "/videos/videoDivider/videoDivider.mp4",
                type: "video/mp4",
              },
            ]}
          />
        </div>
      )}
    </section>
  );
};

const VideoDivider = ({
  sources,
}: {
  sources: { src: string; type: string }[];
}) => {
  return (
    <>
      <LazyVideo
        sources={sources}
        className="w-full h-full object-cover scale-102"
        autoPlay
        muted
        controls={false}
        loop
        playsInline
        preload="auto"
        poster="/images/homeDivider.jpg"
        pauseOnLeave
        onError={() => {}}
        rootMargin="700px"
      />
    </>
  );
};
