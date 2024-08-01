"use client";
import React, { useEffect, useState } from "react";
import type { FormProps } from "antd";
import { Modal, Button, Checkbox, Form, Input } from "antd";
import { logIn, signUp } from "@/lib/utils/auth";
import { User } from "@/lib/types/type";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userIdAtom = atom<string>({
  key: "userId",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

type FieldType = {
  email: string;
  password: string;
};

export default function Login() {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uid, setUid] = useRecoilState(userIdAtom);

  const showSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const handleSignUpOk = () => {
    if (email !== "" && password !== "") {
      signUp(email, password, {} as User);
    }
    setIsSignUpModalOpen(false);
  };

  const handleSignUpCancel = () => {
    setIsSignUpModalOpen(false);
  };

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    console.log("Success:", values);
    const result = await logIn(values.email, values.password);
    setUid(result);
    console.log(result);

    location.replace("/");
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 w-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{
            width: "fit-content",
          }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout={"vertical"}
        >
          <a href="https://fontmeme.com/fonts/pokemon-font/">
            <img
              src="https://fontmeme.com/permalink/240801/3f5d2568ffd0f7fd1a23754b08972b6c.png"
              alt="pokemon-font"
              border="0"
            />
          </a>
          <br />
          <Form.Item<FieldType>
            label="Id(이메일)"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
            className="mx-auto max-w-full"
          >
            <Input
              style={{ width: 450 }}
              placeholder="이메일 형식으로 입력하시오."
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password style={{ width: 450 }} />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 16 }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button type="primary" htmlType="submit">
                로그인
              </Button>
              <Button
                type="primary"
                htmlType="button"
                onClick={showSignUpModal}
              >
                회원가입
              </Button>
            </div>
          </Form.Item>
        </Form>

        <Modal
          open={isSignUpModalOpen}
          onOk={handleSignUpOk}
          onCancel={handleSignUpCancel}
        >
          <div className="p-8 w-full max-w-lg mx-auto">
            <Form
              name="sign_up"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              onFinish={(values) => console.log("Sign Up Success:", values)}
              onFinishFailed={(errorInfo) =>
                console.log("Sign Up Failed:", errorInfo)
              }
              layout="vertical"
            >
              <h2 className="text-xl font-semibold">회원가입</h2>
              <br />
              <Form.Item
                label="ID(이메일)"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
                className="mx-auto max-w-full "
              >
                <Input
                  className=" border-gray-300 rounded-md"
                  style={{ width: 400 }}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="6자 이상"
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: 400 }}
                />
              </Form.Item>
              <Form.Item<FieldType>
                label="Password 확인"
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "비밀번호를 확인하시오",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("비밀번호가 일치하지 않습니다.")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password style={{ width: 400 }} />
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
}

// export default App;
