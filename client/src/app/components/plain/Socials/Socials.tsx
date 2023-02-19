import classNames from "classnames";
import { socialsData } from "@data";
import { Icon } from "@components";
import { getKey } from "@helpers";

import { ISocialsInterface } from "./Socials.interface";

import styles from "./Socials.module.scss";

export const Socials = ({
  size = "m",
  className,
  ...props
}: ISocialsInterface) => {
  return (
    <ul className={classNames(styles.socials, className)} {...props}>
      {socialsData.map((scl) => (
        <li key={getKey()}>
          <a href={scl.path} className={styles[size]}>
            <Icon icon={scl.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};
