import { IRoute } from "@interfaces";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "@data";
import { PAGES } from "@utils";

export const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ element, path }: IRoute) => (
        <Route key={path} path={path} element={element} />
      ))}
      {authRoutes.map(({ element, path }: IRoute) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route
        path="*"
        key={"route-all"}
        element={<Navigate to={PAGES.HOME} replace />}
      />
    </Routes>
  );
};
