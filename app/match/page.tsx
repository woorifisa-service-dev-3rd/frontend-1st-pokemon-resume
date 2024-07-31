"use client";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { textArea } from "../page";
import Usercard from "@/ui/components/userInfoCard/Usercard";

export default function Home() {
  const [title, setTitle] = useRecoilState(textArea);
  return (
    <>
      <Usercard />
    </>
  );
}
