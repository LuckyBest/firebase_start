import React, { FC } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import s from "./AdminPage.module.scss";

export const AdminPage: FC = (): JSX.Element => {
  return (
    <div className={s.container}>
      <NavBar />
      <div className={s.container_content}>content</div>
    </div>
  );
};
