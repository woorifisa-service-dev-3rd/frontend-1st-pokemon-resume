"use client";

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Flex, Layout } from "antd";
import UserIcon from "@/ui/components/match/UserIcon";
import UserList from "@/ui/components/match/UserList";
import SelectedUserList from "@/ui/components/match/SelectedUserList";
import Image from "next/image";
import Usercard from "@/ui/components/userInfoCard/Usercard";

const { Header, Footer, Sider, Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

const MatchPage = ({ children }: React.PropsWithChildren) => (
  <div className="flex flex-row w-screen h-screen">
    <Image
      src="/images/Img_backgroundDark.png"
      alt="background"
      layout="fill"
    />
    <div className="grow-0 m-10">
      <Usercard />
    </div>
    <div className="grow" style={{display:'flex', alignItems:'center'}}>
      <UserList />
    </div>
    <div className="grow-0 m-10 flex items-end">
      <SelectedUserList />
    </div>
  </div>
);

export default MatchPage;
