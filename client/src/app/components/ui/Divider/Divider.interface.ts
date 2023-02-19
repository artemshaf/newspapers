import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IDividerInterface
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  progress?: number;
}
