import { UsersPageStateT } from "./UsersPageReducer";
import {
  ErrorMessagesReducer,
  ErrorMessagesReducerT,
} from "./ErrorMessagesReducer";
import { UserReducer, UserInitialStateT } from "./UserReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { TodoListPageStateT, TodoListPageReducer } from "./TodoListPageReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  UserReducer,
  ErrorMessagesReducer,
  TodoListPageReducer,
});

export type StoreT = {
  UserReducer: UserInitialStateT;
  ErrorMessagesReducer: ErrorMessagesReducerT;
  UsersPageReducer: UsersPageStateT;
  TodoListPageReducer: TodoListPageStateT;
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
