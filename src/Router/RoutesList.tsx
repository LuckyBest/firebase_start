import { privateUrls, publicUrls } from "../constants/routerUrls";
import { AdminPage } from "../pages/AdminPage/AdminPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RoutesT } from "../Types/RoutesTypes";

export const PublicRoutes: Array<RoutesT> = [
  {
    url: publicUrls.login,
    Component: <LoginPage />,
  },
];

export const PrivateRoutes: Array<RoutesT> = [
  {
    url: privateUrls.admin,
    Component: <AdminPage />,
  },
];
