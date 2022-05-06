import { TodoListPageStateT } from "../reducers/TodoListPageReducer";
import { StoreT } from "./../reducers/rootReducer";

export const getTodoListData = ({ ...state }: StoreT): TodoListPageStateT => {
  const TodoListState: TodoListPageStateT = state.TodoListPageReducer;
  return TodoListState;
};
