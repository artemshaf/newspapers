import { Swiper, SwiperSlide } from "swiper/react";
import { getFullRussianDate, getImgFromBaseUrl, getKey } from "@helpers";

import { IBigInfoSliderThumbsInterface } from "./BigInfoSliderThumbs.interface";

import styles from "./BigInfoSliderThumbs.module.scss";
import { Typography } from "@components";
import { useBigInfoSliderThumbs } from "@hooks";

export const BigInfoSliderThumbs = ({
  className,
  ...props
}: IBigInfoSliderThumbsInterface) => {
  const data = [1, 1, 1, 1, 1, 1];
  const {
    mainSwiperAttrs,
    primarySwiperAttrs,
    setSwiperActiveIndex,
    slideTo,
    swiperActiveIndex,
  } = useBigInfoSliderThumbs();

  return (
    <div className={styles["big-info__sliders"]} {...props}>
      <div className={styles["big-info__sliders_l"]}>
        <Swiper
          className={styles["big-info__sliders_l__slider__external"]}
          {...mainSwiperAttrs}
        >
          {data.map((item) => (
            <SwiperSlide
              key={getKey()}
              tag="article"
              className={styles["big-info__sliders_l__slide"]}
            >
              <img loading="lazy" src={getImgFromBaseUrl("posts/post.png")} />
              <div className={styles["big-info__sliders_l__info__wrapper"]}>
                <Typography className={styles.author} variant="span">
                  Название работников -
                  <time
                    className={styles.author__time}
                    dateTime={new Date().toString()}
                  >
                    {getFullRussianDate(new Date())}
                  </time>
                </Typography>
                <Typography
                  className={styles["big-info__sliders_l__title"]}
                  variant="h4"
                >
                  Now Is the Time to Think About Your Small Business Success
                </Typography>
                <Typography
                  className={styles["big-info__sliders_l__info"]}
                  variant="p"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Placeat, sint quisquam. Expedita ut et dolorum voluptatibus
                  commodi ratione, ea nesciunt quaerat possimus autem,
                  reiciendis rem esse culpa voluptates voluptatum ex iure
                  accusamus, a exercitationem ipsam. Beatae nihil fugit aliquam
                  officia, repellendus totam?
                </Typography>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles["big-info__sliders_s"]}>
        <Swiper
          // className={styles["big-info__sliders_s__slider__external"]}
          wrapperClass={styles["big-info__sliders_s__slider"]}
          {...primarySwiperAttrs}
        >
          {data.map((item) => (
            <SwiperSlide
              className={styles["big-info__sliders_s__slide"]}
              key={getKey()}
              tag="article"
            >
              <div className={styles["big-info__sliders_s__slide__content"]}>
                <img loading="lazy" src={getImgFromBaseUrl("posts/post.png")} />
                <div>
                  <Typography className={styles.author} variant="span">
                    Название работников -
                    <time
                      className={styles.author__time}
                      dateTime={new Date().toString()}
                    >
                      {getFullRussianDate(new Date())}
                    </time>
                  </Typography>
                  <Typography
                    className={styles["big-info__sliders_s__slide__info"]}
                    variant="h5"
                  >
                    Now Is the Time to Think About Your Small Business Success
                    fasfas s fasfsaf
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
