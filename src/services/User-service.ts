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

  public login(login: string, password: string): UserLoginFunctionT {
    return (): void => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, login, password)
        .then((userCredential) => {
          const { email }: { email: string | null } = userCredential.user;

          if (!!email) {
            this.dispatch(setUserData(email));
            this.navigation(privateUrls.admin);
          }
        })
        .catch((error) => {
          const errorMessage: string = error.message;
          this.dispatch(setFormAuthError(errorMessage));
        });
    };
  }

  public registration(login: string, password: string): UserLoginFunctionT {
    return (): void => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, login, password)
        .then((userCredential) => {
          const { email }: { email: string | null } = userCredential.user;

          if (!!email) {
            this.dispatch(setUserData(email));
            this.navigation(privateUrls.admin);
          }
        })
        .catch((error) => {
          const errorMessage: string = error.message;
          this.dispatch(setFormAuthError(errorMessage));
        });
    };
  }
}
