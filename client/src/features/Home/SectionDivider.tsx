"use client";
import { LazyVideo } from "lazyvid";

export const SectionDivider = () => {
  return (
    <section className=" mx-[-16px] lg:mx-[-40px] w-calc(100% + 80px) h-auto">
      <div className="w-full h-[478px] overflow-hidden">
        <LazyVideo
          sources={[
            {
              src: "/videos/videoDivider/videoDivider.webm",
              type: "video/webm",
            },
            { src: "/videos/videoDivider/videoDivider.mp4", type: "video/mp4" },
          ]}
          className="w-full h-full object-cover scale-120"
          autoPlay
          muted
          controls={false}
          loop
          playsInline
          preload="auto"
          poster="/images/homeDivider.jpg"
          pauseOnLeave
          onError={() => {}}
        />
      </div>
    </section>
  );
};
