import Image from "next/image";
import React from "react";
import UserIcon from "./UserIcon";
import { User } from "@/lib/types/type";

const userDummys: User[] = [
  {
    id: "1",
    email: "test@email.com",
    password: "1111",
    team: [],
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
      ],
      profile_img:
        "https://item.kakaocdn.net/do/e1d0824bada446f1fd181dd22f65adfc8f324a0b9c48f77dbce3a43bd11ce785",
      github_id: "apple",
      project_due: "12month",
    },
  },
  {
    id: "2",
    email: "test@email.com",
    password: "1111",
    team: [],
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
      ],
      profile_img:
        "https://item.kakaocdn.net/do/e1d0824bada446f1fd181dd22f65adfc8f324a0b9c48f77dbce3a43bd11ce785",
      github_id: "apple",
      project_due: "12month",
    },
  },
  {
    id: "3",
    email: "test@email.com",
    password: "1111",
    team: [],
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
      ],
      profile_img:
        "https://item.kakaocdn.net/do/e1d0824bada446f1fd181dd22f65adfc8f324a0b9c48f77dbce3a43bd11ce785",
      github_id: "apple",
      project_due: "12month",
    },
  },
  {
    id: "4",
    email: "test@email.com",
    password: "1111",
    team: [],
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
      ],
      profile_img:
        "https://item.kakaocdn.net/do/e1d0824bada446f1fd181dd22f65adfc8f324a0b9c48f77dbce3a43bd11ce785",
      github_id: "apple",
      project_due: "12month",
    },
  },
];

const SelectedUserList = () => {
  return (
    <div
      className="relative flex flex-col h-full"
      style={{
        height: "40vh",
        maxHeight: "285px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 30,
        width: 'fit-content',
      }}
    >
      <Image
        src="/images/Img_selectedUserBackground.png"
        alt="background"
        layout="fill"
      />
      <div
        className="absolute top-0 left-0 z-10"
        style={{
          padding: "0.9rem",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 999,
        }}
      >
        {userDummys.map((dummy) => (
          <div key={dummy.id}>
            <UserIcon user={dummy} />
          </div>
        ))}
      </div>
      <button
        className="absolute z-10 bottom-0 left-0"
        style={{
          padding: "0.7rem",
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 999,
        }}
      >
        시작
      </button>
    </div>
  );
};

export default SelectedUserList;
