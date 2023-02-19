import classNames from "classnames";
import { BigInfo, BigPromo, NavPanel } from "@components";

import { IHomePageInterface } from "./HomePage.interface";

import styles from "./HomePage.module.scss";
import { useDocumentTitle } from "usehooks-ts";

export const HomePage = ({ className, ...props }: IHomePageInterface) => {
  useDocumentTitle("Новостная страница");

  return (
    <div className={styles.page} {...props}>
      <NavPanel />
      {/* <BigPromo /> */}
      {/* <BigInfo /> */}
    </div>
  );
};
