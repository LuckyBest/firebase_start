import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { privateUrls } from "../constants/routerUrls";
import { setError } from "../store/actions/errorMessagesActions";
import { setUserData } from "../store/actions/userActions";

export type UserLoginFunctionT = () => void;

export class UserAuth {
  private navigation = useNavigate();
  private dispatch = useDispatch();

  private userAuthHandler(
    login: string,
    password: string,
    firebaseAuth_callback: any
  ): UserLoginFunctionT {
    return (): void => {
      const auth = getAuth();
      firebaseAuth_callback(auth, login, password)
        .then((userCredential: any) => {
          const { email }: { email: string | null } = userCredential.user;

          if (!!email) {
            this.dispatch(setUserData(email));
            this.navigation(privateUrls.todo_list);
          }
        })
        .catch((error: any) => {
          const errorMessage: string = error.message;
          this.dispatch(setError(errorMessage));
        });
    };
  }

  public login(login: string, password: string): UserLoginFunctionT {
    return this.userAuthHandler(login, password, signInWithEmailAndPassword);
  }

  public registration(login: string, password: string): UserLoginFunctionT {
    return this.userAuthHandler(
      login,
      password,
      createUserWithEmailAndPassword
    );
  }
}
