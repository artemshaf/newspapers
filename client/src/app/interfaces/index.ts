import { IconName } from "@components";

export interface IRoute {
  path: string;
  element: JSX.Element;
}

export interface ISocailItem {
  path: string;
  icon: IconName;
}

export interface ILink {
  link: string;
  text?: string;
  icon?: IconName;
}
