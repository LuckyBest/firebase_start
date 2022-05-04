import {
  ErrorMessagesReducer,
  ErrorMessagesReducerT,
} from "./ErrorMessagesReducer";
import { UserReducer, UserInitialStateT } from "./UserReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  UserReducer,
  ErrorMessagesReducer,
});

export type StoreT = {
  UserReducer: UserInitialStateT;
  ErrorMessagesReducer: ErrorMessagesReducerT;
};

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
