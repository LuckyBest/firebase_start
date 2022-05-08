import { TODO_LIST_PAGE_ACTION_TYPES } from "../actionTypes/TodoListPageActionTypes";
import { ReducerActionT } from "./../../Types/ReducersTypes";

const initialState: TodoListPageStateT = {
  isLoading: false,
  Todos: [],
};

export type TodoListPageStateT = {
  isLoading: boolean;
  Todos: Array<TodoListT>;
};

export type TodoListT = {
  id: string;
  text: string;
  isCompleted: boolean;
  event_date: number;
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
    case TODO_LIST_PAGE_ACTION_TYPES.SET_LOADER_ACTIVITY: {
      const loaderActivity: boolean = action.payload;

      return {
        ...state,
        isLoading: loaderActivity,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
