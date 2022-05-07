import React, { FC, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { TodoListService } from "../../services/TodoListPage-service";
import { setError } from "../../store/actions/errorMessagesActions";
import s from "./CreateTodoComponent.module.scss";

export type CreateTodoComponentT = {
  scrollToBottom: () => void;
};

export const CreateTodoComponent: FC<CreateTodoComponentT> = ({
  ...props
}): JSX.Element => {
  const { scrollToBottom } = props;
  const dispatch = useDispatch();
  const [text, setText] = useState<string>("");
  const TodoListServiceInstance = new TodoListService();
  const textareaRef = useRef<any>(null);

  const onTodoTextChange = (e: any): void => {
    setText(e.target?.value);
  };

  const addTodo = (): void => {
    const eventDate: number = Date.now();

    if (!!text) {
      TodoListServiceInstance.addTodo(text, eventDate);
      setText("");
      if (!!textareaRef.current) textareaRef.current.value = "";
      scrollToBottom();
    } else {
      dispatch(setError("The todo textfield can't be empty..."));
    }
  };

  return (
    <div className={s.container}>
      <textarea
        onChange={onTodoTextChange}
        defaultValue={text}
        ref={textareaRef}
      />
      <div className={s.container_button}>
        <button onClick={addTodo}>Add todo</button>
      </div>
    </div>
  );
};
