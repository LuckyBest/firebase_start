import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { privateUrls } from "../constants/routerUrls";

export type UserLoginFunctionT = () => void;

export class UserAuth {
  private navigation = useNavigate();

  public login(login: string, password: string): UserLoginFunctionT {
    return (): void => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, login, password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.navigation(privateUrls.admin);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    };
  }

  public registration(login: string, password: string): UserLoginFunctionT {
    return (): void => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, login, password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.navigation(privateUrls.admin);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    };
  }
}
