
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { User } from "../types/type";

export const { persistAtom } = recoilPersist({
  key: "userDataList",
});

export const userDataListAtom = atom<User[]>({
  key: "userDataList",
  default: [{
    id: "",
    email: "",
    password: "",
    user_info: {
      name: "",
      age: 0,
      phone: "",
      skill_stack: [],
      profile_img: "",
      github_id: "",
      project_due: "1month",
    },
    team : [],
  },],
  effects_UNSTABLE: [persistAtom],
})