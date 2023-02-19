import { FreeMode } from "swiper";
import { SwiperProps } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";

export const useBigInfoSliderRight = () => {
  const swiperAttrs: SwiperProps = {
    slidesPerView: 3,
    direction: "horizontal",
    watchSlidesProgress: true,
    modules: [FreeMode],
  };

  return {
    swiperAttrs,
  };
};
