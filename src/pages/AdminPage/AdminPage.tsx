import React, { FC } from "react";
import { Params, useParams } from "react-router-dom";
import { AdminPagesHeader } from "../../components/AdminPagesHeader/AdminPagesHeader";
import { NavBar } from "../../components/NavBar/NavBar";
import { TodoListPage } from "../TodoListPage/TodoListPage";
import { UsersPage } from "../UsersPage/UsersPage";
import s from "./AdminPage.module.scss";

export type AdminInnerPagesT = Record<string, JSX.Element>;

const AdminInnerPages: AdminInnerPagesT = {
  todo_list: <TodoListPage />,
  users: <UsersPage />,
};

export const AdminPage: FC = (): JSX.Element => {
  const { page_id }: Readonly<Params<string>> = useParams();

  return (
    <div className={s.container}>
      <NavBar />
      <div className={s.container_content}>
        {!!page_id && (
          <>
            <AdminPagesHeader title={page_id} />
            {AdminInnerPages[page_id]}
          </>
        )}
      </div>
    </div>
  );
};
