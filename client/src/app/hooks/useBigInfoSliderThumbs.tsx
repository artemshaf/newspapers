import { useState } from "react";
import {
  FreeMode,
  Thumbs,
  Pagination,
  Scrollbar,
  type Swiper as SwiperRefType,
} from "swiper";
import { SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";

export const useBigInfoSliderThumbs = () => {
  const [swiperActiveIndex, setSwiperActiveIndex] = useState<number>(0);

  const [swiperThumbsMain, setSwiperThumbsMain] =
    useState<SwiperRefType | null>(null);
  const [swiperThumbsPrimary, setSwiperThumbsPrimary] =
    useState<SwiperRefType | null>(null);

  const slideTo = (index: number) => {
    if (swiperThumbsMain) {
      swiperThumbsMain.slideTo(index);
      swiperThumbsMain.activeIndex = index;
    }
    if (swiperThumbsPrimary) {
      swiperThumbsPrimary.slideTo(index);
      swiperThumbsPrimary.activeIndex = index;
    }
    setSwiperActiveIndex(index);
  };

  const primarySwiperAttrs: SwiperProps = {
    thumbs: {
      swiper:
        swiperThumbsMain && !swiperThumbsMain.destroy ? swiperThumbsMain : null,
    },
    onSwiper: setSwiperThumbsPrimary,
    slidesPerView: 4.7,
    direction: "vertical",
    watchSlidesProgress: true,
    modules: [Thumbs, FreeMode],
  };

  const mainSwiperAttrs: SwiperProps = {
    onSwiper: setSwiperThumbsMain,
    thumbs: {
      swiper:
        swiperThumbsPrimary && !swiperThumbsPrimary.destroy
          ? swiperThumbsPrimary
          : null,
    },
    onSlideChange: (swiper) => {
      slideTo(swiper.activeIndex);
    },
    grabCursor: true,
    spaceBetween: 30,
    modules: [Thumbs, FreeMode],
  };

  return {
    primarySwiperAttrs,
    mainSwiperAttrs,
    slideTo,
    swiperActiveIndex,
    setSwiperActiveIndex,
  };
};
