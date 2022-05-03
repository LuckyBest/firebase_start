import { ReducerActionT } from "../../Types/ReducersTypes";
import { USER_ACTION_TYPES } from "../actionTypes/UserActionTypes";

const initialState: UserInitialStateT = {};

export type UserInitialStateT = {};

export const UserReducer = (
  state: UserInitialStateT = initialState,
  action: ReducerActionT
) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_USER_DATA: {
      return {
        ...state,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
