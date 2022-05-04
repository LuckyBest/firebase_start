import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { privateUrls, publicUrls } from "../constants/routerUrls";
import { isUserRegistered } from "../store/selectors/UserSelectors";
import { RoutesT } from "../Types/RoutesTypes";
import { SignedUserRoutes, PublicRoutes } from "./RoutesList";

export const PagesRouter: FC = (): JSX.Element => {
  const user: boolean = useSelector(isUserRegistered);

  return (
    <Routes>
      {user ? (
        <>
          {SignedUserRoutes.map(
            ({ url, Component }: RoutesT, index: number) => {
              console.log("url", url);

              return (
                <Route path={url} element={Component} key={`${index}_${url}`} />
              );
            }
          )}
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
