import React, { FC } from "react";
import { Link } from "react-router-dom";
import s from "./NavBarItem.module.scss";

export type NavBarItemT = {
  path: string;
  title: string;
};

export const NavBarItem: FC<NavBarItemT> = ({ path, title }): JSX.Element => {
  return (
    <Link to={path}>
      <div className={s.container}>
        <span>{title}</span>
      </div>
    </Link>
  );
};
