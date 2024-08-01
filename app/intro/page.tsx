"use client";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, InputNumber, Upload, Checkbox, Col, Row } from "antd";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const App: React.FC = () => {
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e.fileList;
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Form
        {...formItemLayout}
        variant="filled"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 800 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        layout={"vertical"}
      >
        <Form.Item
          label="이름"
          name="Name"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: 400 }} />
        </Form.Item>

        <Form.Item
          label="나이"
          name="Age"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <InputNumber style={{ width: 400 }} />
        </Form.Item>

        <Form.Item
          label="Github Id"
          name="Github_Id"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input style={{ width: 400 }} />
        </Form.Item>

        <Form.Item
          label="희망 기간"
          name="Duration"
          rules={[{ required: true, message: "Please input!" }]}
          style={{ width: 400 }}
        >
          <Input style={{ width: 400 }} />
        </Form.Item>

        <Form.Item
          label="프로필 사진"
          name="fileList"
          rules={[{ required: true, message: "Please input!" }]}
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: "none" }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="checkbox-group"
          label="기술 스택"
          rules={[{ required: true }]}
        >
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox value="A" style={{ lineHeight: "32px" }}>
                  A
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="B" style={{ lineHeight: "32px" }} disabled>
                  B
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="C" style={{ lineHeight: "32px" }}>
                  C
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="D" style={{ lineHeight: "32px" }}>
                  D
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="E" style={{ lineHeight: "32px" }}>
                  E
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="F" style={{ lineHeight: "32px" }}>
                  F
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
