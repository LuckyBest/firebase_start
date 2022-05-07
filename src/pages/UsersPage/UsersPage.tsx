import React, { FC } from "react";
import { UserListItem } from "../../components/UserListItem/UserListItem";
import s from "./UsersPage.module.scss";

export const UsersPage: FC = (): JSX.Element => {
  return (
    <div className={s.container}>
      <div className={s.container_user_list}>
        <UserListItem />
      </div>
    </div>
  );
};
