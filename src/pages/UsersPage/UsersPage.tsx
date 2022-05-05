import React, { FC, useEffect, useState } from "react";
import { firebase } from "../../utils/firebase";
import { UserListItem } from "../../components/UserListItem/UserListItem";
import s from "./UsersPage.module.scss";

export const UsersPage: FC = (): JSX.Element => {
  const db = firebase.firestore().collection("tasks");
  const [data, setData] = useState<any>();

  const getData = () => {
    db.onSnapshot((x) => {
      const items: any = [];
      x.forEach((doc) => {
        items.push(doc);
      });
      setData(items);
    });
  };

  useEffect(() => {
    getData();
    console.log("data", data);
  }, []);

  return (
    <div className={s.container}>
      <div className={s.container_user_list}>
        <UserListItem />
      </div>
    </div>
  );
};
