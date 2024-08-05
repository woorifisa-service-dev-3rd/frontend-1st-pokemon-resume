import React from "react";
import { atom, useRecoilState } from "recoil";
import SkillStack from "./SkillStack";
import Image from "next/image";

const dummy = {
  id: "1",
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

const dummyText = atom<string>({
  key: "firstDummy",
  default: JSON.stringify(dummy),
});

const Usercard = () => {
  const [info, setInfo] = useRecoilState(dummyText);
  const parsedInfo = JSON.parse(info);

  return (
    <div
      className="relative flex h-full w-full"
      style={{ minWidth: "30vw", color: "#181818" }}
    >
      <Image
        src="/images/Img_userProfile.png"
        alt="background"
        layout="fill"
        objectFit="fill"
        sizes=""
      />
      <div className="absolute z-10" style={{}}>
        <div style={{ height: "10vh", fontSize: "4vh", padding: "1.2vh" }}>
          {parsedInfo.user_info.github_id}
        </div>
        <div
          style={{
            padding: "1.5vh",
            marginRight: "1.2vw",
            paddingTop: "0px",
            height: "40vh",
            width: "30vw",
          }}
        >
          <img
            style={{ width: "100%" }}
            src={parsedInfo.user_info.profile_img}
            alt="profileImg"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "30vw",
            alignItems: "flex-end",
            position: "absolute",
            right: "7%",
            top: "55%",
          }}
        >
          {parsedInfo.user_info.skill_stack.map((it) => (
            <SkillStack skill={it} key={it.name} />
          ))}
        </div>
        <div style={{ position: "absolute", left: 2, top: "71.5%" }}>
          <div style={{ height: "10vh", fontSize: "4vh", padding: "2vh" }}>
            이름 : {parsedInfo.user_info.name}
          </div>
          <div style={{ height: "10vh", fontSize: "2.5vh", padding: "2vh" }}>
            <p>나이 : {parsedInfo.user_info.age}</p>
            <p>원하는 프로젝트기한 : {parsedInfo.user_info.project_due}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
