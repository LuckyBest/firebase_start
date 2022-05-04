import { ERROR_MESSAGES_ACTION_TYPES } from "../actionTypes/ErrorMessagesActionTypes";
import { ReducerActionT } from "./../../Types/ReducersTypes";

const initialState: ErrorMessagesReducerT = {
  loginFormError: "",
};

export type ErrorMessagesReducerT = {
  loginFormError: string;
};

export const ErrorMessagesReducer = (
  state: ErrorMessagesReducerT = initialState,
  action: ReducerActionT
) => {
  switch (action.type) {
    case ERROR_MESSAGES_ACTION_TYPES.SET_FORM_AUTH_ERROR: {
      return {
        ...state,
        loginFormError: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
