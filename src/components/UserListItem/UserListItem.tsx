import React, { FC } from "react";
import s from "./UserListItem.module.scss";

export const UserListItem: FC = (): JSX.Element => {
  return (
    <div className={s.container}>
      <span>UserListItem</span>
    </div>
  );
};
