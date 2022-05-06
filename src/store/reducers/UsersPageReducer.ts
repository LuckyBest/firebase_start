import { ReducerActionT } from "../../Types/ReducersTypes";
import { USERS_PAGE_ACTION_TYPES } from "../actionTypes/UsersPageActionTypes";

const initialState: UsersPageStateT = {
  usersList: [],
};

export type UsersPageStateT = {
  usersList: any[];
};

export const UsersPageReducer = (
  state: UsersPageStateT = initialState,
  action: ReducerActionT
): UsersPageStateT => {
  switch (action.type) {
    case USERS_PAGE_ACTION_TYPES.SET_USERS_LIST: {
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
