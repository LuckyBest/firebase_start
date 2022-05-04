import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormAuthError } from "../../store/actions/errorMessagesActions";
import { getErrorsData } from "../../store/selectors/ErrorMessagesSelectors";
import s from "./ErrorComponent.module.scss";

export const ErrorComponent: FC = (): JSX.Element => {
  const error: string = useSelector(getErrorsData).loginFormError;
  const [isError, setIsError] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsError(!!error);
    setTimeout(() => {
      dispatch(setFormAuthError(""));
    }, 5000);
  }, [error]);

  let containerClass: string = `${s.container}`;

  if (isError) containerClass += ` ${s.show_up}`;

  return (
    <div className={containerClass}>
      <span className={s.container_error}>{error}</span>
    </div>
  );
};
