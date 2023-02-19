import classNames from "classnames";

import { IFooterInterface } from "./footer-interface";

import styles from "./footer.module.scss";

export const Footer = ({ className, ...props }: IFooterInterface) => (
  <footer className={classNames(styles.footer, className)} {...props}>
    footer
  </footer>
);
