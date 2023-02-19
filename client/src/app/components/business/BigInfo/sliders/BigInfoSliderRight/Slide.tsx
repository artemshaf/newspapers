import { SwiperSlide } from "swiper/react";
import { getImgFromBaseUrl } from "@helpers";
import { Icon } from "@components";
import styles from "./BigInfoSliderRight.module.scss";

export const Slide = () => {
  return (
    <SwiperSlide className={styles["small-info__slider__slide"]} tag="article">
      <div className={styles["small-info__slider__slide__content"]}>
        <img loading="lazy" src={getImgFromBaseUrl("posts/post.png")} />
        <button className={styles.icon_search}>
          <Icon size="m" icon="Search" />
        </button>
      </div>
    </SwiperSlide>
  );
};
