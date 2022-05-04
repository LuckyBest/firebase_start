import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getErrorsData } from "../../../store/selectors/ErrorMessagesSelectors";
import s from "./LoginFormError.module.scss";

export const LoginFormError: FC = (): JSX.Element => {
  const error: string = useSelector(getErrorsData).loginFormError;
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (!!error) setIsError(true);
  }, []);

  let containerClass: string = `${s.container}`;

  if (isError) containerClass += ` ${s.hide}`;

  return (
    <div className={containerClass}>
      <span className={s.container_error}>{error}</span>
    </div>
  );
};
