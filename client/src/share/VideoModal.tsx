"use client";

import { useEffect, useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type VideoSource = {
  label: string;
  src: string;
};

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  poster?: string;
  sources: VideoSource[];
}

// Adds params to hide most UI elements where possible.
const buildVimeoEmbedSrc = (playerEmbedUrl: string) => {
  try {
    const url = new URL(playerEmbedUrl);
    const sp = url.searchParams;
    sp.set("title", "0");
    sp.set("byline", "0");
    sp.set("portrait", "0");
    sp.set("badge", "0");
    sp.set("vimeo_logo", "0");
    sp.set("autopause", "0");
    sp.set("playsinline", "1");
    sp.set("dnt", "1");
    return url.toString();
  } catch {
    // Fallback: append params.
    const joiner = playerEmbedUrl.includes("?") ? "&" : "?";
    return (
      playerEmbedUrl +
      `${joiner}title=0&byline=0&portrait=0&badge=0&vimeo_logo=0&autopause=0&playsinline=1&dnt=1`
    );
  }
};

export const VideoModal = ({
  isOpen,
  onClose,
  title,
  sources,
}: VideoModalProps) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleClose = useCallback(() => {
    setActiveIdx(0);
    onClose();
  }, [onClose]);

  const handleSwitchSource = (idx: number) => {
    if (idx === activeIdx) return;
    setActiveIdx(idx);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    },
    [handleClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("keydown", handleKeyDown);
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isOpen, handleKeyDown]);

  const activeSource = sources[activeIdx];
  const iframeSrc = activeSource ? buildVimeoEmbedSrc(activeSource.src) : "";

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-9999 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <div className="absolute inset-0 bg-black/80" onClick={handleClose} />

          <motion.div
            className="relative z-10 w-[90vw] lg:w-[80vw] max-h-[90vh] flex flex-col"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.05 },
            }}
            exit={{ scale: 0.95, opacity: 0, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center md:justify-between justify-end mb-[16px]">
              <h3 className="hidden md:flex text-[18px] md:text-[24px] font-light font-Newsreader text-white">
                {title}
              </h3>

              <div className="flex items-center gap-[16px]">
                {sources.length > 1 &&
                  sources.map((source, idx) => (
                    <button
                      key={`${idx}-${source.src}`}
                      onClick={() => handleSwitchSource(idx)}
                      className={`px-[16px] py-[6px] text-[14px] font-Poppins font-light rounded-full border transition-colors duration-300 cursor-pointer ${
                        activeIdx === idx
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-white/70 border-white/30 hover:border-white/60"
                      }`}
                    >
                      {source.label}
                    </button>
                  ))}

                <button
                  onClick={handleClose}
                  className="ml-[8px] text-white/70 hover:text-white transition-colors text-[28px] leading-none cursor-pointer"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
            </div>

            <div className="w-full aspect-video relative rounded-sm overflow-hidden bg-black">
              {activeSource && (
                <iframe
                  key={activeSource.src}
                  src={iframeSrc}
                  title={title}
                  tabIndex={-1}
                  frameBorder={0}
                  className="absolute border-0 outline-none bg-transparent"
                  style={{
                    border: 0,
                    margin: 0,
                    padding: 0,
                    display: "block",
                    top: "-1px",
                    left: "-1px",
                    width: "calc(100% + 2px)",
                    height: "calc(100% + 2px)",
                  }}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              )}
            </div>

            <h3 className="flex md:hidden text-[18px] mt-[10px] md:text-[24px] font-light font-Newsreader text-white">
              {title}
            </h3>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
