import Image from "next/image";
import React from "react";
import UserIcon from "./UserIcon";
import { User } from "@/lib/types/type";

const userList = [1, 2, 3];

const userDummys: User[] = [
  {
    id: "zxcv",
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
    id: "zxcv",
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

const UserList = () => {
  return (
    <div className="relative flex h-full" style={{height: '100%'}}>
      <Image
        src="/images/Img_userListBackground.png"
        alt="background"
        layout="fill"
      />
      <div className="absolute z-10 flex flex-row" style={{padding: '1rem'}}>
        {userDummys.map((dummy) => (
          <div key={dummy.id}>
            <UserIcon user={dummy} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
