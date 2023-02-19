import classNames from "classnames";

import { IBadgeInterface } from "./Badge.interface";

import styles from "./Badge.module.scss";

export const Badge = ({
  size = "m",
  type = "сommon",
  className,
  children,
  ...props
}: IBadgeInterface) => {
  return (
    <button
      className={classNames(
        styles.badge,
        styles[type],
        styles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
