import { USERS_PAGE_ACTION_TYPES } from "../actionTypes/UsersPageActionTypes";
import { ReducerActionT } from "./../../Types/ReducersTypes";

export const setUsersList = (data: any): ReducerActionT => ({
  type: USERS_PAGE_ACTION_TYPES.SET_USERS_LIST,
  payload: data,
});
