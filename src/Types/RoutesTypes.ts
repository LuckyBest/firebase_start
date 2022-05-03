export type RoutesT = {
  url: string;
  Component: JSX.Element;
};

export type publicUrlsList = "login";

export type privateUrlsList = "admin";

export type publicUrlsT = Record<publicUrlsList, string>;

export type privateUrlsT = Record<privateUrlsList, string>;
