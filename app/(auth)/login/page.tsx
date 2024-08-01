"use client";
import React, { useEffect, useState } from "react";
import type { FormProps } from "antd";
import { Modal, Button, Checkbox, Form, Input } from "antd";
import { logIn, signUp } from "@/lib/utils/auth";
import { User } from "@/lib/types/type";

type FieldType = {
  username: string;
  password: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
  logIn(values.username, values.password);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App: React.FC = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const handleSignUpOk = () => {
    if (email !== "" && password !== "") {
      console.log(email, password, "hi");

      signUp(email, password, {} as User);
    }
    setIsSignUpModalOpen(false);
  };

  const handleSignUpCancel = () => {
    setIsSignUpModalOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
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
          <h1 style={{ textAlign: "center" }}>로그인</h1>
          <br />
          <Form.Item<FieldType>
            label="Id"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input style={{ width: 400 }} placeholder="이메일 형식으로 입력하시오." />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password style={{ width: 400 }} />
          </Form.Item>

          <Form.Item<FieldType> name="remember" valuePropName="checked" wrapperCol={{ span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16 }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button type="primary" htmlType="submit">
                로그인
              </Button>
              <Button type="primary" htmlType="button" onClick={showSignUpModal}>
                회원가입
              </Button>
            </div>
          </Form.Item>
        </Form>

        <Modal open={isSignUpModalOpen} onOk={handleSignUpOk} onCancel={handleSignUpCancel}>
          <Form
            name="sign_up"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={(values) => console.log("Sign Up Success:", values)}
            onFinishFailed={(errorInfo) => console.log("Sign Up Failed:", errorInfo)}
          >
            <Form.Item<FieldType>
              label="ID(이메일)"
              name="username"
              rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Input autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password
                placeholder="6자 이상"
                onChange={(e) => setPassword(e.target.value)}
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
                    return Promise.reject(new Error("비밀번호가 일치하지 않습니다."));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default App;
