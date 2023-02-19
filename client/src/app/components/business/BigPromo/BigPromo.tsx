import classNames from "classnames";
import { Container } from "@components";

import { IBigPromoInterface } from "./BigPromo.interface";

import styles from "./BigPromo.module.scss";
import { getImgFromBaseUrl } from "../../../helpers";

export const BigPromo = ({ className, ...props }: IBigPromoInterface) => {
  return (
    <Container>
      <ul className={classNames(styles.promo, className)} {...props}>
        <li className={styles.promo_l}>
          <img src={getImgFromBaseUrl("posts/post.png")} />
        </li>
        <li className={styles.promo_s}>
          <img src={getImgFromBaseUrl("posts/post.png")} />
          <img src={getImgFromBaseUrl("posts/post.png")} />
        </li>
        <li className={styles.promo_m}>
          <img src={getImgFromBaseUrl("posts/post.png")} />
        </li>
      </ul>
    </Container>
  );
};
