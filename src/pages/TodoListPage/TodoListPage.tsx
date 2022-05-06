import React, { FC, useEffect } from "react";
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

  useEffect(() => {
    TodoListInstance.loadTodoList();
  }, []);

  return (
    <div className={s.container}>
      {todos?.map(
        ({ id, text, isCompleted }: TodoListT, index: number): JSX.Element => {
          const props: TodoListItemT = {
            id,
            text,
            isCompleted,
          };
          return <TodoListItem {...props} key={`${id}_${index}`} />;
        }
      )}
      <CreateTodoComponent />
    </div>
  );
};
