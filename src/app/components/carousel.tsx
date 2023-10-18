import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import type { ReactNode } from "react";

type TButtonProps = {
  enabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

export const PrevButton = ({ enabled, onClick }: TButtonProps): ReactNode => {
  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      e.preventDefault();
      if (enabled) {
        onClick?.(e);
      }
    },
    [enabled, onClick]
  );

  return (
    <button
      className={
        "embla__button embla__button--prev top-[calc(50%-16px)] h-8 w-8 fill-black"
      }
      onClick={handleOnClick}
      disabled={!enabled}
    >
      <svg
        className={"embla__button__svg"}
        viewBox={"137.718 -1.001 366.563 644"}
      >
        <path
          d={
            "M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"
          }
        />
      </svg>
    </button>
  );
};

export const NextButton = ({ enabled, onClick }: TButtonProps): ReactNode => {
  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLElement>): void => {
      e.preventDefault();
      if (enabled) {
        onClick?.(e);
      }
    },
    [enabled, onClick]
  );

  return (
    <button
      className={
        "embla__button embla__button--next top-[calc(50%-16px)] ml-2 h-8 w-8 fill-black"
      }
      onClick={handleOnClick}
      disabled={!enabled}
    >
      <svg className={"embla__button__svg"} viewBox={"0 0 238.003 238.003"}>
        <path
          d={
            "M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"
          }
        />
      </svg>
    </button>
  );
};

type TProgressBarCarouselProps = {
  children: ReactNode;
  overflow?: boolean;
};
const Carousel = ({
  children,
  overflow,
}: TProgressBarCarouselProps): ReactNode => {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      containScroll: "trimSnaps",
      dragFree: true,
      slidesToScroll: 1,
      skipSnaps: false,
    },
    [WheelGesturesPlugin() as never]
  );

  const [isPrevBtnEnabled, set_isPrevBtnEnabled] = useState(false);
  const [isNextBtnEnabled, set_isNextBtnEnabled] = useState(false);
  const [scrollProgress, set_scrollProgress] = useState(0);

  const scrollPrev = useCallback(
    (): void => embla && embla.scrollPrev(),
    [embla]
  );
  const scrollNext = useCallback(
    (): void => embla && embla.scrollNext(),
    [embla]
  );

  const onSelect = useCallback((): void => {
    if (!embla) {
      return;
    }
    set_isPrevBtnEnabled(embla.canScrollPrev());
    set_isNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  const onScroll = useCallback((): void => {
    if (!embla) {
      return;
    }
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    set_scrollProgress(progress * 100);
  }, [embla, set_scrollProgress]);

  useEffect((): void => {
    if (!embla) {
      return;
    }
    onSelect();
    onScroll();
    embla.on("select", onSelect);
    embla.on("scroll", onScroll);
  }, [embla, onSelect, onScroll]);

  return (
    <article className={"embla--progress-bar relative"}>
      <div className={"embla"}>
        <div className={"embla__progress bg-bg-03 mb-4"}>
          <div
            className={"embla__progress__bar w-full bg-primary"}
            style={{ transform: `translateX(${scrollProgress}%)` }}
          />
        </div>
        <div
          className={`embla__viewport ${overflow ? "overflow" : ""}`}
          ref={viewportRef}
        >
          <div className={"embla__container flex flex-row gap-x-6 pb-2"}>
            {children}
          </div>
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={isPrevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={isNextBtnEnabled} />
    </article>
  );
};

export default Carousel;
