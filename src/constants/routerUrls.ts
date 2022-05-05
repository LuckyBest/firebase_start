import {
  adminInnerUrlsT,
  privateUrlsT,
  publicUrlsT,
} from "../Types/RoutesTypes";

export const publicUrls: publicUrlsT = {
  login: "/",
};

export const AdminInnerPagesUrls: adminInnerUrlsT = {
  analytics: "/admin/analytics",
  users: "/admin/users",
};

export const privateUrls: privateUrlsT = {
  admin: "/admin/:page_id",
  ...AdminInnerPagesUrls,
  ...publicUrls,
};
