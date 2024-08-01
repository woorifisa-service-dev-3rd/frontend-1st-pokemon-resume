"use client";

import React, { useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "antd";
import UserList from "@/ui/components/match/UserList";
import SelectedUserList from "@/ui/components/match/SelectedUserList";
import Image from "next/image";
import Usercard from "@/ui/components/userInfoCard/Usercard";
import { get, getById } from "@/lib/utils/db";
import { useRecoilState } from "recoil";
import { userDataListAtom } from "@/lib/atoms/userDataListAtom";
import { userIdAtom } from "@/lib/atoms/loginedUserIdAtom";

const inter = Inter({ subsets: ["latin"] });

const MatchPage = ({ children }: React.PropsWithChildren) => {
  const [uid, setUid] = useRecoilState(userIdAtom);
  const [userDataList, setUserDataList] = useRecoilState(userDataListAtom);

  const userListDataFetch = async () => {
    const response = await get("users");
    return response;
  }

  useEffect(()=>{
    uid && 
    userListDataFetch().then((data)=>{
      const userData = data
      setUserDataList(data);
    })
  })

  useEffect(()=>{
    console.log(userDataList)
  }, [userDataList])

  return (
    <div className="flex flex-row w-screen h-screen">
      <Image
        src="/images/Img_backgroundDark.png"
        alt="background"
        layout="fill"
      />
      <div className="grow-0 m-10">
        <Usercard />
      </div>
      <div className="grow" style={{ display: "flex", alignItems: "center" }}>
        <UserList />
      </div>
      <div className="grow-0 m-10 flex items-end">
        <SelectedUserList />
      </div>
    </div>
  );
};

export default MatchPage;
