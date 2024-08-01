import React from "react";
import { atom, useRecoilState } from "recoil";
import SkillStack from "./SkillStack";
import Image from "next/image";
import { getById } from "@/lib/utils/db";

const dummy = {
  id: "zxcv",
  email: "test@email.com",
  password: "1111",
  user_info: {
    name: "홍찬의",
    age: 25,
    phone: "010-0000-0000",
    skill_stack: [
      {
        name: "javascript",
        img_url:
          "https://modulabs.co.kr/wp-content/uploads/2023/11/image-1536x864.jpeg",
      },
      {
        name: "javascript",
        img_url:
          "https://modulabs.co.kr/wp-content/uploads/2023/11/image-1536x864.jpeg",
      },
      {
        name: "javascript",
        img_url:
          "https://modulabs.co.kr/wp-content/uploads/2023/11/image-1536x864.jpeg",
      },
      {
        name: "javascript",
        img_url:
          "https://modulabs.co.kr/wp-content/uploads/2023/11/image-1536x864.jpeg",
      },
    ],
    profile_img:
      "https://item.kakaocdn.net/do/e1d0824bada446f1fd181dd22f65adfc8f324a0b9c48f77dbce3a43bd11ce785",
    github_id: "apple",
    project_due: "12month",
  },
};

// const fetchUser = async () => {
//   try {
//     const collectionName = "users";
//     // const documentId = "6lPIha7rFHP75DPEmLugESqarhw2";
//     const user = await get(collectionName);
//     console.log(user);
//   } catch (error) {
//     console.error("Failed to fetch document:", error);
//   }
// };
const collectionName = "users";
const documentId = "6lPIha7rFHP75DPEmLugESqarhw2";
const getUser = () => {
  const userById = getById(collectionName, documentId);
  return userById;
};

console.log(`getUser ${getUser()}`);

const dummyText = atom<string>({
  key: "firstDummy",
  default: JSON.stringify(getUser()),
});

const Usercard = () => {
  const [info, setInfo] = useRecoilState(dummyText);
  const parsedInfo = JSON.parse(info);

  return (
    <div className="relative flex h-full w-full">
      <Image
        src="/images/Img_userProfile.png"
        alt="background"
        layout="fill"
        objectFit="fill"
        sizes=""
      />
      <div className="absolute z-10" style={{ padding: "1rem" }}>
        <div style={{ maxHeight: "10%" }}>
          <p style={{ fontSize: "2.0rem", lineHeight: 0 }}>
            {parsedInfo.user_info.github_id}
          </p>
        </div>
        <div
          className="flex justify-between items-center"
          style={{ padding: "1rem" }}
        >
          <img
            src={parsedInfo.user_info.profile_img}
            alt="profileImg"
            style={{ maxWidth: "10rem", maxHeight: "10rem" }}
          />
          <div className="flex flex-col items-end">
            {parsedInfo.user_info.skill_stack.map((it) => (
              <SkillStack skill={it} key={it.name} />
            ))}
          </div>
        </div>
        <div className=" p-5">
          <p style={{ fontSize: "1.2rem" }}>
            이름 : {parsedInfo.user_info.name}
          </p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <p>나이 : {parsedInfo.user_info.age}</p>
          <p>원하는 프로젝트기한 : {parsedInfo.user_info.project_due}</p>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
