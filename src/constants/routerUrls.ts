import {
  adminInnerUrlsT,
  privateUrlsT,
  publicUrlsT,
} from "../Types/RoutesTypes";

export const publicUrls: publicUrlsT = {
  login: "/",
};

export const AdminInnerPagesUrls: adminInnerUrlsT = {
  todo_list: "/admin/todo_list",
  users: "/admin/users",
};

export const privateUrls: privateUrlsT = {
  admin: "/admin/:page_id",
  ...AdminInnerPagesUrls,
  ...publicUrls,
};
