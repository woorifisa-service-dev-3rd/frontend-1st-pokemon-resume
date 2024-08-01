import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import { User } from "../../../lib/types/type";

const UserIcon = (user?: User) => {
  return (
    <button
      style={{
        width: "2rem",
        height: "2rem",
        margin: "0.5rem",
        // , boxShadow: '1px 1px 1px 0 rgba(0, 0, 0, 0.2)', borderRadius: '0.9rem'
      }}
    >
      {user.id ? (
        <img src={`${user.user_info.profile_img}`} alt="user-icon" />
      ) : (
        <Image
          src="/icons/Icon_unknown.png"
          alt="user-icon"
          width={50}
          height={50}
          priority={true}
        />
      )}
    </button>
  );
};

export default UserIcon;
