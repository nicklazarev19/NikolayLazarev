import { LazyVideo } from "lazyvid";

interface VideoBgProps {
  sources: {
    src: string;
    type: string;
  }[];
  poster: string;
}

export const VideoBg = ({ sources, poster }: VideoBgProps) => {
  return (
    <div className="relative w-full h-full">
      <LazyVideo
        sources={sources}
        className="absolute top-0 left-0 w-full h-full object-cover scale-120"
        autoPlay
        muted
        controls={false}
        loop
        playsInline
        preload="auto"
        pauseOnLeave
        poster={poster}
      />
    </div>
  );
};
