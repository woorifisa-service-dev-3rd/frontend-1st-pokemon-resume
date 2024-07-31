import { app } from "./firebaseApp";
import { getAuth } from "firebase/auth";

export const auth = getAuth(app);
