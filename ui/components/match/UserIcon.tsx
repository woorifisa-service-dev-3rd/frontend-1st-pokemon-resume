import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Image from "next/image";
import { User } from "../../../lib/types/type";

const UserIcon = (user: User) => {
  return (
    <button>
      {user.id ? (
        <img src={`${user.user_info.profile_img}`} alt="user-icon" />
      ) : (
        <Image
          src="/icons/Icon_unknown.png"
          alt="user-icon"
          width={25}
          height={25}
          priority={true}
        />
      )}
    </button>
  );
};

export default UserIcon;
