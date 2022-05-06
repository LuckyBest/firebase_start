import React, { FC } from "react";
import s from "./CreateTodoComponent.module.scss";

export const CreateTodoComponent: FC = (): JSX.Element => {
  return (
    <div className={s.container}>
      <textarea />
      <div className={s.container_button}>
        <button>Add todo</button>
      </div>
    </div>
  );
};
