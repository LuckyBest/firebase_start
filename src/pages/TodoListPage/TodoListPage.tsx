import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { CreateTodoComponent } from "../../components/CreateTodoComponent/CreateTodoComponent";
import {
  TodoListItem,
  TodoListItemT,
} from "../../components/TodoListItem/TodoListItem";
import { TodoListService } from "../../services/TodoListPage-service";
import { TodoListT } from "../../store/reducers/TodoListPageReducer";
import { getTodoListData } from "../../store/selectors/TodoListSelectors";
import s from "./TodoListPage.module.scss";

export const TodoListPage: FC = (): JSX.Element => {
  const todos: Array<TodoListT> = useSelector(getTodoListData).Todos;
  const bottomDivRef = useRef<any>(null);
  const TodoListInstance = new TodoListService();

  const scrollToBottom = (): void => {
    bottomDivRef.current.scrollIntoView({ behavior: "smooth" });
  };
  console.log("todos", todos);

  useEffect(() => {
    TodoListInstance.loadTodoList();

    // return () => {
    //   TodoListInstance.closeFirebaseConnection();
    // };
  }, []);

  return (
    <div className={s.container}>
      <div className={s.container_content}>
        <div className={s.todos}>
          {todos?.map(
            (
              { id, text, isCompleted }: TodoListT,
              index: number
            ): JSX.Element => {
              const props: TodoListItemT = {
                id,
                text,
                isCompleted,
              };
              return <TodoListItem {...props} key={`${id}_${index}`} />;
            }
          )}
          <div ref={bottomDivRef} />
        </div>
      </div>
      <CreateTodoComponent scrollToBottom={scrollToBottom} />
    </div>
  );
};
