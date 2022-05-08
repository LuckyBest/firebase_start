import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getTodoListData } from "../../store/selectors/TodoListSelectors";
import s from "./TodoLoader.module.scss";

export const TodoLoader: FC = (): JSX.Element => {
  const getTodoLoaderActivity: boolean = useSelector(getTodoListData).isLoading;

  if (!getTodoLoaderActivity) return <></>;
  
  return <div className={s.lds_dual_ring}></div>;
};
