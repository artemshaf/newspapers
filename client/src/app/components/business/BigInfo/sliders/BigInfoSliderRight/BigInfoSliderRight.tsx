import classNames from "classnames";

import { IBigInfoSliderRightInterface } from "./BigInfoSliderRight.interface";

import styles from "./BigInfoSliderRight.module.scss";
import { Swiper } from "swiper/react";
import { Slide } from "./Slide";
import { useBigInfoSliderRight } from "@hooks";
import { getKey } from "@helpers";

export const BigInfoSliderRight = ({
  className,
  ...props
}: IBigInfoSliderRightInterface) => {
  const { swiperAttrs } = useBigInfoSliderRight();
  const data = [1, 1, 1, 1, 1];

  return (
    <div
      key={getKey()}
      className={styles["small-info__slider__wrapper"]}
      {...props}
    >
      <Swiper
        className={styles["small-info__slider__external"]}
        wrapperClass={styles["small-info__slider"]}
        {...swiperAttrs}
      >
        {data.map((item) => (
          <Slide key={getKey()} />
        ))}
      </Swiper>
    </div>
  );
};
