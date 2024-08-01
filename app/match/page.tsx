"use client";

import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Flex, Layout } from "antd";
import UserIcon from "@/ui/components/match/UserIcon";
import UserList from "@/ui/components/match/UserList";

const { Header, Footer, Sider, Content } = Layout;

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <Layout
    style={{
      display: "flex",
      flexDirection: "row",
      minHeight: "50vh",
      maxHeight: "70vh",
    }}
  >
    {/* <Header>포켓몬 뚜따</Header> */}
    <Content>감자감자야</Content>
    <Content>
      <UserList />
    </Content>
    <Sider width={"5%"}></Sider>
  </Layout>
);

export default RootLayout;
