import classNames from "classnames";

import { IContainerInterface } from "./container.interface";

import styles from "./container.module.scss";

export const Container = ({
  children,
  className,
  ...props
}: IContainerInterface) => (
  <section className={classNames(styles.container, className)} {...props}>
    {children}
  </section>
);
