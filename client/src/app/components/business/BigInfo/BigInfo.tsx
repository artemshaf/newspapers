import classNames from "classnames";
import { Container, Typography, Divider, Badge } from "@components";

import { IBigInfoInterface } from "./BigInfo.interface";

import styles from "./BigInfo.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { BigInfoSliderRight, BigInfoSliderThumbs } from "./sliders";

export const BigInfo = ({ className, ...props }: IBigInfoInterface) => {
  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={classNames(styles["big-info__wrapper"], className)}
          {...props}
        >
          <div className={styles.categories__wrapper}>
            <Typography variant="h4" className={styles.categories__title}>
              Не пропустите!
            </Typography>
            <ul className={styles.categories__list}>
              <li>
                <Badge type="rare">Все</Badge>
              </li>
              <li>
                <Badge type="secondary">Спорт</Badge>
              </li>
              <li>
                <Badge type="fresh">Путешествия</Badge>
              </li>
            </ul>
          </div>
          <Divider />
          <BigInfoSliderThumbs />
        </div>
        <div className={styles["small-info"]}>
          <ul className={styles["small-info__categories"]}>
            <li>
              <Badge type="primary">Недавние</Badge>
            </li>
            <li>
              <Badge type="secondary">В тренде</Badge>
            </li>
            <li>
              <Badge type="hot">Просматриваемые</Badge>
            </li>
          </ul>
          <Divider />
          <BigInfoSliderRight />
        </div>
      </div>
    </Container>
  );
};
