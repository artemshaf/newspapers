import { DetailedHTMLProps, HTMLAttributes } from "react";

export * from "./Socials";
export interface INavPanelInterface
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}
