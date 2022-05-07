import React, { FC, useEffect, useState } from "react";
import { DeleteTodoButton } from "../../assets/DeleteTodoButton";
import s from "./TodoListItem.module.scss";

export type TodoListItemT = {
  id: string;
  text: string;
  isCompleted: boolean;
  event_date: number;
  onDeleteTodo: (id: string) => () => void;
  setTodoCompletion: (
    id: string,
    text: string,
    isCompleted: boolean,
    event_date: number,
    setIsTodoCompleted: any
  ) => () => void;
};

export const TodoListItem: FC<TodoListItemT> = ({ ...props }): JSX.Element => {
  const { id, text, isCompleted, event_date, onDeleteTodo, setTodoCompletion } =
    props;

  const [isTodoCompleted, setIsTodoCompleted] = useState<boolean>(false);

  // useEffect(() => {
  //   setIsTodoCompleted(isCompleted);
  //   setTodoCompletion(id, text, isTodoCompleted, event_date);
  // }, [isCompleted]);

  // const setCompletion = (): void => {
  //   setIsTodoCompleted((prevState: boolean): boolean => !prevState);
  // };

  return (
    <div className={s.container}>
      <div className={s.container_checkbox}>
        <input
          type="checkbox"
          id={s.checked}
          defaultChecked={isTodoCompleted}
          onClick={setTodoCompletion(
            id,
            text,
            isTodoCompleted,
            event_date,
            setIsTodoCompleted
          )}
        />
        <label htmlFor={s.checked} />
      </div>
      <div className={s.container_text}>
        <p>{text}</p>
      </div>
      <div className={s.container_delete}>
        <div onClick={onDeleteTodo(id)}>
          <DeleteTodoButton />
        </div>
      </div>
    </div>
  );
};
