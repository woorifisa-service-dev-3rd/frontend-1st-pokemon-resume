import React from "react";
import { Image } from "antd";
import { atom, useRecoilState } from "recoil";
import SkillStack from "./SkillStack";

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
    <>
      <div>Usercard</div>
      <p className="text-2xl w-9">{parsedInfo.user_info.github_id}</p>
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        alt="profileImg"
      />
      <div style={flex}>
        {parsedInfo.user_info.skill_stack.map((it) => (
          <SkillStack skill={it} key={it} />
        ))}
      </div>
      <p className="text-lg font-medium">이름 : {parsedInfo.user_info.name}</p>
      <p>나이 : {parsedInfo.user_info.age}</p>
      <p>원하는 프로젝트기한 : {parsedInfo.user_info.project_due}</p>
    </>
  );
};

export default Usercard;
