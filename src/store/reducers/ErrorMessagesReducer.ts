import { ERROR_MESSAGES_ACTION_TYPES } from "../actionTypes/ErrorMessagesActionTypes";
import { ReducerActionT } from "./../../Types/ReducersTypes";

const initialState: ErrorMessagesReducerT = {
  Error: "",
};

export type ErrorMessagesReducerT = {
  Error: string;
};

export const ErrorMessagesReducer = (
  state: ErrorMessagesReducerT = initialState,
  action: ReducerActionT
): ErrorMessagesReducerT => {
  switch (action.type) {
    case ERROR_MESSAGES_ACTION_TYPES.SET_FORM_AUTH_ERROR: {
      return {
        ...state,
        Error: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
