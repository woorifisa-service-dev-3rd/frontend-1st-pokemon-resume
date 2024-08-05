// app/page.tsx
"use client";

import Image from "next/image";
import { atom, useRecoilState } from "recoil";
import { Button, Input } from "antd";
import { upload, getimg } from "@/lib/utils/storage";
import { useRef, useState } from "react";
import MainContainer from "@/ui/components/main/MainContainer";
import { getById } from "@/lib/utils/db";
import { useEffect } from "react";
import { userIdAtom } from "@/lib/atoms/loginedUserIdAtom";
import { userAtom } from "@/lib/atoms/loginedUserAtom";
import { User } from "@/lib/types/type";


export default function Home() {
  const [uid, setUid] = useRecoilState(userIdAtom);
  const [userData, setUserData] = useRecoilState(userAtom);
  const userDataFetch = async () => {
    const reponse = await getById("users", uid);
    return reponse;
  };

  useEffect(() => {
    uid && userDataFetch().then((data) => {
      const userData = data as User;
      setUserData(userData)
    })
  })

  return (
    <div className="flex flex-row w-screen h-screen relative" style={{ padding: "15vh 15vw" }}>
      <Image src="/images/스크린샷 2024-08-01 오후 1.52.25.png" alt="background" layout="fill" />
      <MainContainer />
    </div>
  );
}
