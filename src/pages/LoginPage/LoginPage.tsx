import React, { FC, useState } from "react";
import { Field, Form, Formik } from "formik";
import { UserLoginT } from "../../Types/CredentialTypes";
import { debounce } from "../../utils/debounce";
import { UserAuth, UserLoginFunctionT } from "../../services/User-service";
import * as Yup from "yup";
import s from "./LoginPage.module.scss";

const Schema = Yup.object({
  email: Yup.string()
    .email()
    .min(6, "To short login...")
    .required("Need to fill the field*"),
  password: Yup.string()
    .min(6, "To short password...")
    .required("Need to fill the field*"),
});

export const LoginPage: FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isRegistrationChosen, setIsRegistrationChosen] =
    useState<boolean>(false);
  const userAuthInstance = new UserAuth();

  const initialValues: UserLoginT = {
    email,
    password,
  };

  const setUserLogin = (e: any): void => {
    setEmail(e.target.value);
  };

  const setUserPassword = (e: any): void => {
    setPassword(e.target.value);
  };

  const onSubmit: UserLoginFunctionT = isRegistrationChosen
    ? userAuthInstance.registration(email, password)
    : userAuthInstance.login(email, password);

  const setAuthButton = (choice: boolean) => (): void => {
    setIsRegistrationChosen(choice);
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={Schema}
        onSubmit={onSubmit}
        validateOnChange
        enableReinitialize
      >
        {(props: any) => {
          const { errors } = props;
          return (
            <Form className={s.content}>
              <div>
                <span>Email:</span>
                <Field
                  type="email"
                  name="email"
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
              <div className={s.submit_button}>
                {isRegistrationChosen ? (
                  <>
                    <button type="submit">Registration</button>
                    <span onClick={setAuthButton(false)}>Login</span>
                  </>
                ) : (
                  <>
                    <button type="submit">Login</button>
                    <span onClick={setAuthButton(true)}>Registration</span>
                  </>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
