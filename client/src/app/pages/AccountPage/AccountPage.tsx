import classNames from "classnames";
import { useDocumentTitle } from "usehooks-ts";

import { IAccountPageInterface } from "./AccountPage.interface";

import styles from "./AccountPage.module.scss";

export const AccountPage = ({ className, ...props }: IAccountPageInterface) => {
  useDocumentTitle("Аккаунт");

  return (
    <div className={styles.accountPage} {...props}>
      AccountPage Component
    </div>
  );
};
