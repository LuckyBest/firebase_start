export type RoutesT = {
  url: string;
  Component: JSX.Element;
};

export type publicUrlsList = "login";

export type adminInnerUrlsList = "analytics" | "users";

export type privateUrlsList = "admin" | adminInnerUrlsList;

export type adminInnerUrlsT = Record<adminInnerUrlsList, string>;

export type publicUrlsT = Record<publicUrlsList, string>;

export type privateUrlsT = Record<privateUrlsList | publicUrlsList, string>;
