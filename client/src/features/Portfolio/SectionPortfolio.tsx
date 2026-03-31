"use client";
import { Fragment, useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ArrowRightIcon from "@/assets/icons/arrowRight19.5w.svg";
import PlayIcon from "@/assets/icons/play1.svg";
import PlayIconHovered from "@/assets/icons/play2.svg";
import { SectionContactUs } from "@/share/SectionContactUs";
import { VideoModal } from "@/share/VideoModal";
import {
  PORTFOLIO_DESCRIPTION_BREAK,
  portfolioData,
  portfolioItemThumbnail,
  resolvePortfolioItemThumbnail,
  portfolioItemToVideoSources,
} from "@/constants/portfolioData";

//styles
const portfolioItemRowStyle =
  "flex flex-col lg:flex-row max-w-[1360px] w-full mx-auto justify-between items-center gap-[24px] lg:gap-0";
const portfolioImageWrapStyle = "w-full max-w-[783px] aspect-[783/386]";
const portfolioContentWrapStyle =
  "flex flex-col items-center justify-center w-full max-w-[553px]";
const portfolioLocationStyle =
  "text-[18px] lg:text-[20px] font-light font-Newsreader leading-[130%] tracking-[0.38px] text-black text-center";
const portfolioTitleStyle =
  "mt-[10px] text-[30px] lg:text-[45px] font-regular font-Newsreader leading-[120%] tracking-[0.38px] text-black text-center";
const portfolioDescriptionStyle =
  "mt-[10px] text-[18px] lg:text-[25px] font-light font-Newsreader italic leading-[130%] tracking-[0.38px] text-black text-center";

const DESCRIPTION_PREVIEW_WORDS = 14;

function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function truncateToWords(text: string, maxWords: number): string {
  const words = text.trim().split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return text.trim();
  return `${words.slice(0, maxWords).join(" ")}...`;
}

function descriptionPlainForPreview(text: string): string {
  return text
    .split(PORTFOLIO_DESCRIPTION_BREAK)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function splitDescriptionBlocks(text: string): string[] {
  const parts = text
    .split(PORTFOLIO_DESCRIPTION_BREAK)
    .map((s) => s.trim())
    .filter(Boolean);
  const normalized = text.trim();
  return parts.length > 0 ? parts : normalized ? [normalized] : [];
}

const descriptionModalBlockStyle =
  "text-[16px] lg:text-[20px] font-light font-Newsreader not-italic leading-[140%] tracking-[0.38px] text-black text-left m-0";

//components
export const SectionPortfolio = () => {
  const [activePortfolioId, setActivePortfolioId] = useState<number | null>(
    null,
  );

  const activeItem =
    portfolioData.find((item) => item.id === activePortfolioId) ?? null;

  const activeSources = useMemo(
    () => (activeItem ? portfolioItemToVideoSources(activeItem) : []),
    [activeItem],
  );
  const [resolvedActivePostersById, setResolvedActivePostersById] = useState<
    Record<number, string>
  >({});

  useEffect(() => {
    if (!activeItem) return;

    let cancelled = false;
    void resolvePortfolioItemThumbnail(activeItem).then((resolved) => {
      if (cancelled) return;

      setResolvedActivePostersById((prev) =>
        prev[activeItem.id] === resolved
          ? prev
          : { ...prev, [activeItem.id]: resolved },
      );
    });

    return () => {
      cancelled = true;
    };
  }, [activeItem]);

  return (
    <section className="mt-[50px] lg:mt-[100px]">
      <div className="flex flex-col gap-[100px] lg:gap-[90px]">
        {portfolioData.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <Fragment key={item.id}>
              <PortfolioItem
                item={item}
                isReverse={isReverse}
                onOpenVideo={() => setActivePortfolioId(item.id)}
              />
              {(index + 1) % 3 === 0 && <SectionContactUs />}
            </Fragment>
          );
        })}
      </div>

      <VideoModal
        isOpen={activePortfolioId !== null && activeSources.length > 0}
        onClose={() => setActivePortfolioId(null)}
        title={activeItem ? `${activeItem.couple} - ${activeItem.place}` : ""}
        poster={
          activeItem
            ? (resolvedActivePostersById[activeItem.id] ??
              portfolioItemThumbnail(activeItem))
            : undefined
        }
        sources={activeSources}
      />
    </section>
  );
};

type PortfolioItemType = (typeof portfolioData)[number];
type PortfolioItemProps = {
  item: PortfolioItemType;
  isReverse: boolean;
  onOpenVideo: () => void;
};

const PortfolioItem = ({
  item,
  isReverse,
  onOpenVideo,
}: PortfolioItemProps) => {
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(() =>
    portfolioItemThumbnail(item),
  );
  const descriptionPlain = descriptionPlainForPreview(item.description);
  const wordCount = countWords(descriptionPlain);
  const needsDescriptionModal = wordCount > DESCRIPTION_PREVIEW_WORDS;
  const descriptionPreview = truncateToWords(
    descriptionPlain,
    DESCRIPTION_PREVIEW_WORDS,
  );

  const closeDescription = useCallback(() => setDescriptionOpen(false), []);

  useEffect(() => {
    let cancelled = false;
    void resolvePortfolioItemThumbnail(item).then((resolved) => {
      if (!cancelled) setPreviewImage(resolved);
    });

    return () => {
      cancelled = true;
    };
  }, [item]);

  useEffect(() => {
    if (!descriptionOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDescription();
    };
    document.addEventListener("keydown", onKey);
    const prevBody = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevBody;
    };
  }, [descriptionOpen, closeDescription]);

  const rowStyle = `${portfolioItemRowStyle} ${isReverse ? "lg:flex-row-reverse" : ""}`;

  const textBlock = (
    <div className={portfolioContentWrapStyle}>
      <p className={portfolioLocationStyle}>{item.place}</p>
      <h3 className={portfolioTitleStyle}>{item.couple}</h3>
      {needsDescriptionModal ? (
        <button
          type="button"
          onClick={() => setDescriptionOpen(true)}
          className={`${portfolioDescriptionStyle} w-full cursor-pointer text-center transition-colors duration-300 hover:text-[#5F5F5F] focus-visible:outline-2 focus-visible:outline-offset-2`}
          aria-expanded={descriptionOpen}
          aria-haspopup="dialog"
        >
          {descriptionPreview}
        </button>
      ) : (
        <p className={portfolioDescriptionStyle}>{descriptionPlain}</p>
      )}
      <WatchVideoButton onClick={onOpenVideo} />
    </div>
  );

  const previewBlock = (
    <VideoPreview previewImage={previewImage} onOpenVideo={onOpenVideo} />
  );

  return (
    <div className={rowStyle}>
      {previewBlock}
      {textBlock}
      <AnimatePresence>
        {descriptionOpen && (
          <motion.div
            className="fixed inset-0 z-9990 flex items-center justify-center p-[16px] lg:p-[24px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close description"
              className="absolute inset-0 bg-black/60 cursor-pointer"
              onClick={closeDescription}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${item.couple} — full description`}
              className="relative z-10 w-full max-w-[640px] max-h-[min(80vh,720px)] overflow-y-auto rounded-sm bg-white px-[20px] py-[24px] lg:px-[28px] lg:py-[32px] shadow-lg"
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-[14px] lg:gap-[18px]">
                {splitDescriptionBlocks(item.description).map((block, idx) => (
                  <p key={idx} className={descriptionModalBlockStyle}>
                    {block}
                  </p>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type VideoPreviewProps = {
  previewImage: string;
  onOpenVideo: () => void;
};

const VideoPreview = ({ previewImage, onOpenVideo }: VideoPreviewProps) => {
  return (
    <button
      onClick={onOpenVideo}
      className={`${portfolioImageWrapStyle} relative overflow-hidden group cursor-pointer`}
    >
      <Image
        src={previewImage}
        alt="Portfolio Item"
        width={783}
        height={386}
        className="w-full h-full object-cover transition-opacity duration-300"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={PlayIcon}
          alt="Play preview video"
          width={55}
          height={55}
          className="opacity-100 transition-opacity duration-300 group-hover:opacity-0"
        />
        <Image
          src={PlayIconHovered}
          alt="Play preview video hovered"
          width={55}
          height={55}
          className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
    </button>
  );
};

type WatchVideoButtonProps = {
  onClick: () => void;
};

const WatchVideoButton = ({ onClick }: WatchVideoButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group mt-[20px] flex flex-row items-center gap-[10px] cursor-pointer"
    >
      <p className="text-[16px] font-medium font-Poppins leading-[130%] tracking-[0.38px] text-black transition-colors duration-300 group-hover:text-[#5F5F5F]">
        Watch video
      </p>
      <Image
        src={ArrowRightIcon}
        alt="Arrow Right Icon"
        width={19.5}
        height={2}
        className="transition-transform duration-300 ease-out group-hover:translate-x-[4px]"
      />
    </button>
  );
};
