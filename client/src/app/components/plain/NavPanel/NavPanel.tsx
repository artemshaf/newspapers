import classNames from "classnames";
import { navData } from "@data";

import { INavPanelInterface } from "./NavPanel.interface";

import styles from "./NavPanel.module.scss";
import { NavLink } from "react-router-dom";
import { Container, Icon, TextField, Typography } from "@components";
import { getKey } from "@helpers";
import { useForm } from "@hooks";
import { formResolver } from "./resolver";
import { SubmitHandler, Controller } from "react-hook-form";

export type FormFields = {
  query: string;
};

export const NavPanel = ({ className, ...props }: INavPanelInterface) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: formResolver,
  });

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      handleSubmit(onSubmit);
    }
  };

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <Container className={styles.container}>
      <div className={styles.wrapper}>
        <ul className={classNames(styles.list, className)} {...props}>
          {navData.map((navItem) => (
            <li className={styles.item} key={getKey()}>
              <NavLink className={styles.link} to={navItem.link}>
                {navItem.text && <Typography>{navItem.text}</Typography>}
                {navItem.icon && <Icon icon={navItem.icon} />}
              </NavLink>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="query"
            render={({ field: { onChange, onBlur, ref, value } }) => (
              <TextField
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                ref={ref}
                error={errors.query}
                onBlur={onBlur}
                placeholder="Поиск"
              />
            )}
          />
        </form>
      </div>
    </Container>
  );
};
