import { TodoListT } from "./../reducers/TodoListPageReducer";
import { TODO_LIST_PAGE_ACTION_TYPES } from "../actionTypes/TodoListPageActionTypes";
import { ReducerActionT } from "./../../Types/ReducersTypes";

export const setTodos = (data: Array<TodoListT>): ReducerActionT => ({
  type: TODO_LIST_PAGE_ACTION_TYPES.SET_TODOS,
  payload: data,
});
