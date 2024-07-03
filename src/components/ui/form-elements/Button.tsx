import clsx from "clsx";

import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

import s from "./form.module.css";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: "small" | "medium" | "large";
  primary?: boolean;
  secondary?: boolean;
}

export const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  size = "small",
  primary,
  secondary,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        s[size],
        { [s.primary]: primary },
        { [s.secondary]: secondary },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
