import { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { Container, Footer, Header } from "@components";

import { ILayoutInterface } from "./layout-interface";
import { store } from "@store";

export const Layout = ({ children, ...props }: ILayoutInterface) => (
  <>
    <Header />
    <main {...props}>{children}</main>
    <Footer />
  </>
);

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) =>
  function withLayoutComponent(props: T): JSX.Element {
    return (
      <BrowserRouter>
        {/* <Provider store={store}> */}
        <Layout>
          <Component {...props} />
        </Layout>
        {/* </Provider> */}
      </BrowserRouter>
    );
  };
