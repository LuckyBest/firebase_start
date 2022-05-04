import { ReducerActionT } from "../../Types/ReducersTypes";
import { USER_ACTION_TYPES } from "../actionTypes/UserActionTypes";

const initialState: UserInitialStateT = {
  UserData: {
    email: "",
  },
};

export type UserInitialStateT = {
  UserData: {
    email: string;
  };
};

export const UserReducer = (
  state: UserInitialStateT = initialState,
  action: ReducerActionT
) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_USER_DATA: {
      return {
        ...state,
        UserData: {
          ...state.UserData,
          email: action.payload,
        },
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
