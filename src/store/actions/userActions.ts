import { USER_ACTION_TYPES } from "../actionTypes/UserActionTypes";
import { ReducerActionT } from "./../../Types/ReducersTypes";

export const setUserData = (data: any): ReducerActionT => ({
  type: USER_ACTION_TYPES.SET_USER_DATA,
  payload: data,
});
