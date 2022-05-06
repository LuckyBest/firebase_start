import { TODO_LIST_PAGE_ACTION_TYPES } from "../actionTypes/TodoListPageActionTypes";
import { ReducerActionT } from "./../../Types/ReducersTypes";

const initialState: TodoListPageStateT = {
  Todos: [],
};

export type TodoListPageStateT = {
  Todos: [];
};

export const TodoListPageReducer = (
  state: TodoListPageStateT = initialState,
  action: ReducerActionT
): TodoListPageStateT => {
  switch (action.type) {
    case TODO_LIST_PAGE_ACTION_TYPES.SET_TODOS: {
      return {
        ...state,
        Todos: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
