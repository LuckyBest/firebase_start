import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { privateUrls } from "../constants/routerUrls";
import { setFormAuthError } from "../store/actions/errorMessagesActions";
import { setUserData } from "../store/actions/userActions";

export type UserLoginFunctionT = () => void;

export class UserAuth {
  private navigation = useNavigate();
  private dispatch = useDispatch();

  private userDataHandler(
    login: string,
    password: string,
    firebaseAPI_callback: any
  ): UserLoginFunctionT {
    return (): void => {
      const auth = getAuth();
      firebaseAPI_callback(auth, login, password)
        .then((userCredential: any) => {
          const { email }: { email: string | null } = userCredential.user;

          if (!!email) {
            this.dispatch(setUserData(email));
            this.navigation(privateUrls.admin);
          }
        })
        .catch((error: any) => {
          const errorMessage: string = error.message;
          this.dispatch(setFormAuthError(errorMessage));
        });
    };
  }

  public login(login: string, password: string): UserLoginFunctionT {
    return this.userDataHandler(login, password, signInWithEmailAndPassword);
  }

  public registration(login: string, password: string): UserLoginFunctionT {
    return this.userDataHandler(
      login,
      password,
      createUserWithEmailAndPassword
    );
  }
}
