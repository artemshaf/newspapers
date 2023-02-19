import classNames from "classnames";

import { IDividerInterface } from "./Divider.interface";

import styles from "./Divider.module.scss";

export const Divider = ({
  progress = 0,
  className,
  ...props
}: IDividerInterface) => {
  return (
    <div className={classNames(styles.divider, className)} {...props}>
      <div style={{ width: `${progress}%` }} className={styles.progress} />
    </div>
  );
};
