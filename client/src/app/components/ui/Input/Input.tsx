import classNames from "classnames";

import { IInputInterface } from "./input.interface";

import styles from "./input.module.scss";

export const Input = ({ className, ...props }: IInputInterface) => {
  console.log(styles);

  return (
    <div className={classNames(styles.input, className)} {...props}>
      Input Component
    </div>
  );
};
