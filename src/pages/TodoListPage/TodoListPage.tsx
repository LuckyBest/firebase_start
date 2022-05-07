import React, { FC, useCallback, useEffect, useRef } from "react";
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
  const TodoListInstance = new TodoListService();
  const bottomDivRef = useRef<any>(null);

  const scrollToBottom = (): void => {
    bottomDivRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onDeleteTodo = useCallback(
    (id: string) => (): void => {
      TodoListInstance.deleteTodo(id);
    },
    []
  );

  const setTodoCompletion = useCallback(
    (id: string, text: string, isCompleted: boolean, event_date: number) =>
      (): void => {
        console.log("isCompleted", isCompleted);
        console.log("text", text);

        TodoListInstance.setTodoCompletion(id, text, isCompleted, event_date);
      },
    []
  );

  useEffect(() => {
    TodoListInstance.loadTodoList();
    // scrollToBottom();
    return () => {
      TodoListInstance.closeFirebaseConnection();
    };
  }, []);

  return (
    <div className={s.container}>
      <div className={s.container_content}>
        <div className={s.todos}>
          {todos?.map(
            (
              { id, text, isCompleted, event_date }: TodoListT,
              index: number
            ): JSX.Element => {
              const props: TodoListItemT = {
                id,
                text,
                isCompleted,
                event_date,
                onDeleteTodo,
                setTodoCompletion,
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
