import React, { FC } from "react";
import { DeleteTodoButton } from "../../assets/DeleteTodoButton";
import s from "./TodoListItem.module.scss";

export type TodoListItemT = {
  id: string;
  text: string;
  isCompleted: boolean;
};

export const TodoListItem: FC<TodoListItemT> = ({ ...props }): JSX.Element => {
  const { id, text, isCompleted } = props;
  return (
    <div className={s.container}>
      <div className={s.container_checkbox}>
        <input type="checkbox" id={s.checked} defaultChecked={isCompleted} />
        <label htmlFor={s.checked} />
      </div>
      <div className={s.container_text}>
        <p>{text}</p>
      </div>
      <div className={s.container_delete}>
        <div>
          <DeleteTodoButton />
        </div>
      </div>
    </div>
  );
};
