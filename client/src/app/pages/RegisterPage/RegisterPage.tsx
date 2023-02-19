import classNames from "classnames";
import { useDocumentTitle } from "usehooks-ts";

import { IRegisterPageInterface } from "./registerPage.interface";

import styles from "./registerPage.module.scss";

export const RegisterPage = ({
  className,
  ...props
}: IRegisterPageInterface) => {
  useDocumentTitle("Регистрация");

  return (
    <div className={styles.registerPage} {...props}>
      RegisterPage Component
    </div>
  );
};
