import { IRoute } from "@interfaces";
import { AccountPage, HomePage, LoginPage, RegisterPage } from "@pages";
import { PAGES } from "@utils";

export const publicRoutes: IRoute[] = [
  {
    element: <HomePage />,
    path: PAGES.HOME,
  },
  {
    element: <RegisterPage />,
    path: PAGES.REGISTRATION,
  },
  {
    element: <LoginPage />,
    path: PAGES.LOGIN,
  },
];

export const authRoutes: IRoute[] = [
  {
    element: <AccountPage />,
    path: PAGES.ACCOUNT,
  },
];
