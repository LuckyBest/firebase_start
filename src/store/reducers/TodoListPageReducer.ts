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
    case TODO_LIST_PAGE_ACTION_TYPES.ADD_TODO: {
      const TodoListCopied: Array<TodoListT> = JSON.parse(
        JSON.stringify(state.Todos)
      );

      TodoListCopied.push(action.payload);

      return {
        ...state,
        Todos: TodoListCopied,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
