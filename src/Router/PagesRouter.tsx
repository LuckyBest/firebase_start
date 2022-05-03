import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateUrls, publicUrls } from "../constants/routerUrls";
import { RoutesT } from "../Types/RoutesTypes";
import { PrivateRoutes, PublicRoutes } from "./RoutesList";

export const PagesRouter: FC = (): JSX.Element => {
  const user: boolean = false;

  return (
    <Routes>
      {user ? (
        <>
          {PrivateRoutes.map(({ url, Component }: RoutesT, index: number) => {
            return (
              <Route path={url} element={Component} key={`${index}_${url}`} />
            );
          })}
          <Route
            path="*"
            element={<Navigate to={privateUrls.admin} replace />}
          />
        </>
      ) : (
        <>
          {PublicRoutes.map(({ url, Component }: RoutesT, index: number) => {
            return (
              <Route path={url} element={Component} key={`${index}_${url}`} />
            );
          })}
          <Route
            path="*"
            element={<Navigate to={publicUrls.login} replace />}
          />
        </>
      )}
    </Routes>
  );
};
