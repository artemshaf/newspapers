import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ISocialsInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  size?: "s" | "m" | "l";
}
