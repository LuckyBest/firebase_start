import React, { FC } from "react";
import { Link, Params, useParams } from "react-router-dom";
import s from "./NavBarItem.module.scss";

export type NavBarItemT = {
  path: string;
  title: string;
};

export const NavBarItem: FC<NavBarItemT> = ({ path, title }): JSX.Element => {
  const { page_id }: Readonly<Params<string>> = useParams();

  let containerClass: string = `${s.container}`;

  if (page_id === title) containerClass += ` ${s.active}`;
  return (
    <Link to={path}>
      <div className={containerClass}>
        <span>{title}</span>
      </div>
    </Link>
  );
};
