"use client";

import { Children, useEffect, useState, type ReactNode } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Keyboard, HashNavigation, Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const DESKTOP_BREAKPOINT = "(min-width: 1024px)";

const SECTION_HASHES = [
  "home",
  "about",
  "experience",
  "links",
  "services",
  "recognition",
  "writers",
  "blog",
  "contacts",
] as const;

type SectionSwiperProps = {
  children: ReactNode;
};

function hashToIndex(hash: string) {
  const id = hash.replace(/^#/, "");
  const index = SECTION_HASHES.indexOf(id as (typeof SECTION_HASHES)[number]);
  return index >= 0 ? index : 0;
}

export function SectionSwiper({ children }: SectionSwiperProps) {
  const [pagerEnabled, setPagerEnabled] = useState(false);
  const slides = Children.toArray(children);

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_BREAKPOINT);
    const updatePagerMode = () => setPagerEnabled(mediaQuery.matches);

    updatePagerMode();
    mediaQuery.addEventListener("change", updatePagerMode);

    return () => mediaQuery.removeEventListener("change", updatePagerMode);
  }, []);

  if (!pagerEnabled) {
    return <main className="min-h-screen">{children}</main>;
  }

  if (slides.length !== SECTION_HASHES.length) {
    console.warn(
      `SectionSwiper: expected ${SECTION_HASHES.length} sections, received ${slides.length}.`,
    );
  }

  return (
    <main className="h-screen overflow-hidden">
      <Swiper
        className="section-swiper h-full w-full"
        direction="vertical"
        slidesPerView={1}
        speed={700}
        resistanceRatio={0}
        modules={[Mousewheel, Keyboard, HashNavigation, Pagination]}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        hashNavigation={{
          watchState: true,
          replaceState: true,
        }}
        pagination={{
          clickable: true,
        }}
        onInit={(swiper: SwiperInstance) => {
          const hash = window.location.hash;
          if (!hash) {
            return;
          }

          const index = hashToIndex(hash);
          if (index !== swiper.activeIndex) {
            swiper.slideTo(index, 0);
          }
        }}
      >
        {slides.map((slide, index) => {
          const hash = SECTION_HASHES[index] ?? `section-${index}`;

          return (
            <SwiperSlide
              key={hash}
              data-hash={hash}
              className="!h-screen overflow-y-auto"
            >
              {slide}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
}
