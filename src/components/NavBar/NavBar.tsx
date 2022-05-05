import React, { FC } from "react";
import { AdminInnerPagesUrls } from "../../constants/routerUrls";
import { NavBarItem } from "../NavBarItem/NavBarItem";
import s from "./NavBar.module.scss";

export const NavBar: FC = (): JSX.Element => {
  const innerUrls: Array<string[]> = Object.entries(AdminInnerPagesUrls);

  return (
    <div className={s.container}>
      <div className={s.squire} />
      {innerUrls.map(
        ([title, url], index: number): JSX.Element => (
          <NavBarItem title={title} path={url} key={`${url}_${index}`} />
        )
      )}
    </div>
  );
};
