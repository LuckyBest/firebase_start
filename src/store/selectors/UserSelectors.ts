import { StoreT } from "./../reducers/rootReducer";

export const isUserRegistered = ({ ...state }: StoreT): boolean => {
  const isUser: boolean = !!state.UserReducer.UserData.email;
  return isUser;
};
