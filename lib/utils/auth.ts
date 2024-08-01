import { app } from "./firebaseApp";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { add, getById } from "@/lib/utils/db";
import { User } from "@/lib/types/type";

const auth = getAuth(app);
// const email = "이메일 작성";
// const password = "비밀번호 6자리 이상 작성";

// 회원가입
export const signUp = (email: string, password: string, data: User) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user.uid, user.email);

      data.id = user.uid;
      data.email = String(user.email);
      console.log(data.id, data.email);

      add("users", user.uid, data);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

// 로그인
export const logIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // TODO: 로그인 후 처리 로직
      getById("users", user.uid);

      location.replace("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

//로그아웃
export const logOut = () => {
  console.log("시이이이이작");
  console.log(auth);

  signOut(auth)
    .then(() => {
      console.log("로그아웃");
      console.log(auth);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // An error happened.
    });
};
