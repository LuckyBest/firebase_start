import { privateUrlsT, publicUrlsT } from "../Types/RoutesTypes";

export const publicUrls: publicUrlsT = {
  login: "/",
};

export const privateUrls: privateUrlsT = {
  admin: "/admin",
  ...publicUrls,
};
