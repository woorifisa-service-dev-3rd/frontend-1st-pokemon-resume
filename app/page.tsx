"use client";

import Image from "next/image";
import { atom, useRecoilState } from "recoil";
import { Button } from "antd";
import MainContainer from "@/ui/components/main/MainContainer";

const textState = atom<string>({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "감자감자야", // default value (aka initial value)
});

export const textArea = atom<string>({
  key: "1",
  default: "나는 구황작물",
});

export default function Home() {
  const [text, setText] = useRecoilState(textState);
  const [title, setTitle] = useRecoilState(textArea);
  return (
    <div
      className="flex flex-row w-screen h-screen relative"
      style={{ padding: '15vh 15vw' }}
    >
      <Image
        src="/images/스크린샷 2024-08-01 오후 1.52.25.png"
        alt="background"
        layout="fill"
      />
      <MainContainer />
      {/* <div
        className="z-10 w-full h-full"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/Img_mainBackground.png"
          width={500}
          height={500}
          alt={"메인_배경"}
          style={{
            minWidth: "70vw",
            minHeight: "70vh",
            borderRadius: "20px",
          }}
        />
      </div> */}
    </div>
  );
}
