import Image from "next/image";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import Usercard from "../userInfoCard/Usercard";

const userList = [1, 2, 3, 4];

const user = {
  id: "1",
  email: "test@email.com",
  password: "1111",
  team: [],
  user_info: {
    name: "홍찬의",
    age: 25,
    phone: "010-0000-0000",
    skill_stack: [
      {
        name: "javascript",
        img_url:
          "https://modulabs.co.kr/wp-content/uploads/2023/11/image-1536x864.jpeg",
      },
    ],
    profile_img:
      "https://item.kakaocdn.net/do/e1d0824bada446f1fd181dd22f65adfc8f324a0b9c48f77dbce3a43bd11ce785",
    github_id: "apple",
    project_due: "12month",
  },
};

const MainContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isShowModal = () => setIsOpen(!isOpen);
  const closeModal = () => setIsOpen(false);

  return (
    <div
      className="z-10 w-full h-full"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 999,
      }}
    >
      {isOpen && (
        <Modal
          open={isOpen}
          onCancel={closeModal}
          style={{ width: "40vw", height: "50vh" }}
        >
          <Usercard />
        </Modal>
      )}

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
      <div style={{ position: "absolute", left: 10, bottom: 10, zIndex: 20 }}>
        {user ? (
          <img
            src={`${user.user_info.profile_img}`}
            alt="user-icon"
            style={{
              borderRadius: "20px",
              height: "40vh",
              width: "30vw",
              maxHeight: "40vh",
              maxWidth: "30vw",
            }}
          />
        ) : (
          <Image
            src="/images/Img_mainBackground.png"
            width={100}
            height={100}
            alt={"메인_배경"}
            style={{
              borderRadius: "20px",
              height: "40vh",
              width: "30vw",
              maxHeight: "40vh",
              maxWidth: "30vw",
            }}
          />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          right: 10,
          top: 0,
          zIndex: 20,
          background: "#F8F8F8",
          padding: "1rem",
        }}
      >
        <img
          src="/images/Img_pixelMeta.png"
          alt={"메인_배경"}
          style={{
            height: "40vw",
            width: "25vw",
            maxHeight: "40vh",
            maxWidth: "30vw",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          right: 40,
          bottom: 22,
          zIndex: 20,
          height: "12vh",
          width: "30vw",
          maxHeight: "40vh",
          maxWidth: "30vw",
          background: "#F8F8F8",
          borderRadius: "1000px",
          flexDirection: "row",
          display: "flex",
          alignItems: "end",
          padding: "0.2rem",
          justifyContent: "space-around",
        }}
      >
        {userList.map((id) => (
          <button
            key={id}
            style={{
              width: "5rem",
              height: "5rem",
              zIndex: 30,
              borderRadius: "500px",
              padding: "0.5rem",
            }}
            onClick={isShowModal}
          >
            <Image
              src="/images/Img_monsterBall.png"
              width={100}
              height={100}
              alt={"메인_배경"}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
