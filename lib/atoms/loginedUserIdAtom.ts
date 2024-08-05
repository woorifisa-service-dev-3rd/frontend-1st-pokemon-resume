
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { User } from "../types/type";

export const { persistAtom } = recoilPersist({
  key: "loginUserId",
});

export const userIdAtom = atom<string>({
  key: "userId",
  default: "",
  effects_UNSTABLE: [persistAtom],
});