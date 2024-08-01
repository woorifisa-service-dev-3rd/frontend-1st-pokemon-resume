"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Modal, Button, Checkbox, Form, Input } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App: React.FC = () => {
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const showResetPasswordModal = () => {
    setIsResetPasswordModalOpen(true);
  };

  const handleResetPasswordOk = () => {
    setIsResetPasswordModalOpen(false);
  };

  const handleResetPasswordCancel = () => {
    setIsResetPasswordModalOpen(false);
  };

  const showSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const handleSignUpOk = () => {
    setIsSignUpModalOpen(false);
  };

  const handleSignUpCancel = () => {
    setIsSignUpModalOpen(false);
  };
  return (
    <div className="flex">
      <h1>회원가입</h1>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout={"vertical"}
      >
        <Form.Item<FieldType>
          label="ID(이메일)"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          name="remember"
          valuePropName="checked"
          wrapperCol={{ span: 16 }}
        >
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
            <Button type="primary" onClick={showResetPasswordModal}>
              비밀번호 재설정
            </Button>
          </div>
        </Form.Item>
      </Form>
      <Modal
        open={isResetPasswordModalOpen}
        onOk={handleResetPasswordOk}
        onCancel={handleResetPasswordCancel}
      >
        <Form
          name="reset_password"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={(values) => console.log("Password Reset Success:", values)}
          onFinishFailed={(errorInfo) =>
            console.log("Password Reset Failed:", errorInfo)
          }
        >
          <Form.Item<FieldType>
            label="새 비밀번호"
            name="newPassword"
            rules={[
              {
                required: true,
                message: "6자 이상의 새 비밀번호를 입력하시오",
                min: 6,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item<FieldType>
            label="새 비밀번호 확인"
            name="confirmNewPassword"
            dependencies={["newPassword"]}
            rules={[
              {
                required: true,
                message: "새 비밀번호를 확인하시오",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("비밀번호가 일치하지 않습니다.")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={isSignUpModalOpen}
        onOk={handleSignUpOk}
        onCancel={handleSignUpCancel}
      >
        <Form
          name="sign_up"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          onFinish={(values) => console.log("Sign Up Success:", values)}
          onFinishFailed={(errorInfo) =>
            console.log("Sign Up Failed:", errorInfo)
          }
        >
          <Form.Item<FieldType>
            label="ID(이메일)"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="6자 이상" />
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
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default App;
