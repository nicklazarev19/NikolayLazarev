import Image from "next/image";
import { LazyVideo } from "lazyvid";
import { useState } from "react";

interface VideoBgProps {
  sources: {
    src: string;
    type: string;
  }[];
  poster: string;
}

export const VideoBg = ({ sources, poster }: VideoBgProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative w-full h-full bg-black">
      <Image
        src={poster}
        alt="Video poster"
        fill
        priority
        className={`absolute top-0 left-0 w-full h-full object-cover object-bottom transition-opacity duration-300 ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        }`}
        quality={100}
      />
      <LazyVideo
        sources={sources}
        className={`absolute top-0 left-0 w-full h-full object-cover object-bottom transition-opacity duration-300 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        controls={false}
        loop
        playsInline
        preload="auto"
        pauseOnLeave
        onLoaded={() => setIsVideoLoaded(true)}
      />
    </div>
  );
};
