"use client";

import Image from "next/image";
import { atom, useRecoilState } from "recoil";
import { Button } from "antd";

const textState = atom<string>({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: "감자감자야", // default value (aka initial value)
});

export const textArea = atom<string>({
  key:'1',
  default:"나는 구황작물"
})

export default function Home() {
  const [text, setText] = useRecoilState(textState);
  const [title, setTitle] = useRecoilState(textArea);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    </main>
  );
}
