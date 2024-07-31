"use client";
import { RecoilRoot } from "recoil";
import React from "react";

interface RecoilRootWrapperProps {
  children: React.ReactNode;
}

const RecoilWrapper = ({ children }: RecoilRootWrapperProps) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilWrapper;
