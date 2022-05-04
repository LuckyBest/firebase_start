import { StoreT } from "./../reducers/rootReducer";
import { ErrorMessagesReducerT } from "./../reducers/ErrorMessagesReducer";

export const getErrorsData = ({ ...state }: StoreT): ErrorMessagesReducerT => {
  const ErrorMessagesObj: ErrorMessagesReducerT = state.ErrorMessagesReducer;
  return ErrorMessagesObj;
};
