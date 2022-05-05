import React, { FC } from "react";
import s from "./AdminPagesHeader.module.scss";

export type AdminPagesHeaderT = {
  title: string;
};

export const AdminPagesHeader: FC<AdminPagesHeaderT> = ({
  title,
}): JSX.Element => {
  return (
    <div className={s.container}>
      <span>{title}</span>
    </div>
  );
};
