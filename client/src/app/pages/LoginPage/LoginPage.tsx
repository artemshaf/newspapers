import classNames from "classnames";
import { useDocumentTitle } from "usehooks-ts";

import { ILoginPageInterface } from "./LoginPage.interface";

import styles from "./LoginPage.module.scss";

export const LoginPage = ({ className, ...props }: ILoginPageInterface) => {
  useDocumentTitle("Логин");

  return (
    <div className={styles.loginPage} {...props}>
      LoginPage Component
    </div>
  );
};
