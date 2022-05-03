import React, { FC, useState } from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import s from "./LoginPage.module.scss";
import { UserLoginT } from "../../Types/CredentialTypes";
import { debounce } from "../../utils/debounce";

const Schema = Yup.object({
  login: Yup.string()
    .min(6, "To short login...")
    .required("Need to fill the field*"),
  password: Yup.string()
    .min(6, "To short password...")
    .required("Need to fill the field*"),
});

export const LoginPage: FC = (): JSX.Element => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const initialValues: UserLoginT = {
    login,
    password,
  };

  const setUserLogin = (e: any): void => {
    setLogin(e.target.value);
  };

  const setUserPassword = (e: any): void => {
    setPassword(e.target.value);
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={() => console.log("success")}
        validateOnChange
        enableReinitialize
      >
        {(props: any) => {
          const { errors } = props;
          return (
            <div className={s.content}>
              <div>
                <span>Login:</span>
                <Field
                  type="text"
                  name="login"
                  onChange={(e: any) => debounce(setUserLogin(e))}
                />
                <p>{errors.login}</p>
              </div>
              <div>
                <span>Password:</span>
                <Field
                  type="password"
                  name="password"
                  onChange={(e: any) => debounce(setUserPassword(e))}
                />
                <p>{errors.password}</p>
              </div>
              <button type="submit">Login</button>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};
