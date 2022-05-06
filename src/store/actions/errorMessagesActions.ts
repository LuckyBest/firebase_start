import { ERROR_MESSAGES_ACTION_TYPES } from "../actionTypes/ErrorMessagesActionTypes";
import { ReducerActionT } from "./../../Types/ReducersTypes";

export const setError = (data: string): ReducerActionT => ({
  type: ERROR_MESSAGES_ACTION_TYPES.SET_FORM_AUTH_ERROR,
  payload: data,
});
