import classNames from "classnames";
import { forwardRef, useState } from "react";
import { Icon, Typography } from "@components";

import { ITextFieldInterface } from "./TextField.interface";

import styles from "./TextField.module.scss";

export const TextField = forwardRef<HTMLInputElement, ITextFieldInterface>(
  (
    {
      type = "text",
      onBlur,
      isPassword = false,
      name,
      onChange,
      value = "",
      placeholder,
      className,
      disabled,
      error,
      assistive,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFocus, setIsFocus] = useState(false);

    const getEyeIcon = () =>
      isVisible ? (
        <Icon
          onClick={() => setIsVisible(false)}
          // className={styles.icon_eye}
          icon="AddressBook"
        />
      ) : (
        <Icon
          onClick={() => setIsVisible(true)}
          // className={styles.icon_eye}
          icon="ArrowLeft"
        />
      );

    return (
      <label className={styles.label}>
        <div
          className={classNames(styles.input__wrapper, {
            [styles.input__wrapper_active]: isFocus,
            [styles.input__wrapper_error]: error,
          })}
        >
          <input
            onPaste={(e) => (isPassword ? e.preventDefault() : e)}
            ref={ref}
            className={classNames(className, [styles.input], {
              // [styles.isPassword]: isPassword,
            })}
            type={
              type === "password" ? (isVisible ? "text" : "password") : "text"
            }
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => setIsFocus(true)}
            onBlur={() => !value && setIsFocus(false)}
            {...props}
          />
          {isPassword && getEyeIcon()}
        </div>
        <Typography
          variant="span"
          className={classNames(styles.placeholder, {
            [styles.placeholder_active]: isFocus || value,
          })}
        >
          {placeholder}
        </Typography>
        {assistive && (
          <Typography
            className={classNames(styles.assistive, {
              [styles.assistive_error]: error,
            })}
            variant="span"
          >
            {assistive}
          </Typography>
        )}
      </label>
    );
  }
);
