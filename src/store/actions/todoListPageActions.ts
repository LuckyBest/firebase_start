import { TODO_LIST_PAGE_ACTION_TYPES } from "../actionTypes/TodoListPageActionTypes";
import { ReducerActionT } from "./../../Types/ReducersTypes";

export const setTodos = (data: any): ReducerActionT => ({
  type: TODO_LIST_PAGE_ACTION_TYPES.SET_TODOS,
  payload: data,
});
