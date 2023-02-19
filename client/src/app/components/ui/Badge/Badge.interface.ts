import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IBadgeInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "s" | "m" | "l";
  type?: "hot" | "сommon" | "rare" | "primary" | "secondary" | "fresh";
}
