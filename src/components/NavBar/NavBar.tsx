import React, { FC } from "react";
import { NavBarItem } from "../NavBarItem/NavBarItem";
import s from "./NavBar.module.scss";

export const NavBar: FC = (): JSX.Element => {
  return (
    <div className={s.container}>
      <div className={s.squire} />
      <NavBarItem path="" title="here" />
    </div>
  );
};
