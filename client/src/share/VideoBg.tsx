import Image from "next/image";
import { LazyVideo } from "lazyvid";
import { useCallback, useRef, useState } from "react";

interface VideoBgProps {
  sources: {
    src: string;
    type: string;
  }[];
  poster: string;
  posterPriority?: boolean;
  posterUnoptimized?: boolean;
}

export const VideoBg = ({
  sources,
  poster,
  posterPriority = true,
  posterUnoptimized,
}: VideoBgProps) => {
  const isLocalPublic = poster.startsWith("/");
  const unoptimized = posterUnoptimized ?? (isLocalPublic ? true : false);
  const [revealVideo, setRevealVideo] = useState(false);
  const revealedRef = useRef(false);

  const handlePlaying = useCallback(() => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    setRevealVideo(true);
  }, []);

  const hasVideo = sources.length > 0;

  return (
    <div className="relative h-full w-full bg-[#F5F5F4]">
      <Image
        src={poster}
        alt=""
        fill
        priority={posterPriority}
        fetchPriority={posterPriority ? "high" : "auto"}
        sizes="100vw"
        quality={85}
        unoptimized={unoptimized}
        className={`absolute top-0 left-0 z-20 h-full w-full object-cover object-bottom transition-opacity duration-500 ease-out ${
          revealVideo && hasVideo ? "opacity-0" : "opacity-100"
        }`}
      />
      {hasVideo && (
        <LazyVideo
          sources={sources}
          className={`absolute top-0 left-0 z-10 h-full w-full object-cover object-bottom transition-opacity duration-500 ease-out ${
            revealVideo ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          controls={false}
          loop
          playsInline
          preload="auto"
          pauseOnLeave
          onPlaying={handlePlaying}
          onError={() => {}}
        />
      )}
    </div>
  );
};
