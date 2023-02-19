import classNames from "classnames";

import { ITemplateNameInterface } from "./TemplateName.interface";

import styles from "./TemplateName.module.scss";

export const TemplateName = ({
  className,
  ...props
}: ITemplateNameInterface) => {
  return (
    <div className={styles.templateName} {...props}>
      TemplateName Component
    </div>
  );
};
