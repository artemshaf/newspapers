import { getFullRussianDate, getImgFromBaseUrl } from "@helpers";
import { Badge, Container, Icon, Socials, Typography } from "@components";
import { IHeaderInterface } from "./header-interface";

import styles from "./header.module.scss";
import { Link } from "react-router-dom";

export const Header = ({ className, ...props }: IHeaderInterface) => {
  return (
    <>
      <section className={styles.header_top} {...props}>
        <Container className={styles.container_top}>
          <div className={styles.time__block}>
            <Icon icon="Clock" />
            <Typography>{getFullRussianDate(new Date())}</Typography>
          </div>
          <Badge className={styles.badge}>Горячие новости</Badge>
          <Link to={"/"} className={styles.promo}>
            Indonesia says located black box recorders from crashed plane
            <Icon size="s" icon="ArrowLeft" className={styles.promo__arrow} />
          </Link>
          <Socials className={styles.socials} size="s" />
        </Container>
      </section>
      <section className={styles.header_bottom}>
        <Container className={styles.container_bottom}>
          <div className={styles.logo__wrapper}>
            <Icon size="l" icon="Logo" />
            <Typography variant="h2">Newspaper</Typography>
          </div>
          <img
            src={getImgFromBaseUrl("banner.jpg")}
            alt={"banner"}
            loading="lazy"
            className={styles.banner}
          />
        </Container>
      </section>
    </>
  );
};
