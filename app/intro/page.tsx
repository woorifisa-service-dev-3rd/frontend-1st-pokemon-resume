'use client';

import React, { useState } from 'react';
import { Form, Input, Button, Upload, message, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload';
import { User, Skill, DueDate } from '@/lib/types/type';
import { add } from '@/lib/utils/db';
import SkillSelector from './SkillSelector';

const { Option } = Select;

const dueDates: DueDate[] = [
    '1month',
    '2month',
    '3month',
    '4month',
    '5month',
    '6month',
    '7month',
    '8month',
    '9month',
    '10month',
    '11month',
    '12month',
];

const ProfileSetupPage: React.FC = () => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<any[]>([]);
    const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);

    const handleFileChange = (info: { file: RcFile }) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    const handleSkillsSelected = (skills: Skill[]) => {
        setSelectedSkills(skills);
    };

    const handleFinish = async (values: any) => {
        const { name, age, phone, githubId, projectDue } = values;

        const userId = 'user-id-placeholder';
        const userEmail = 'user-email-placeholder';

        const user: User = {
            id: userId,
            email: userEmail,
            password: '',
            user_info: {
                name,
                age,
                phone,
                skill_stack: selectedSkills,
                profile_img: fileList[0]?.url || '',
                github_id: githubId,
                project_due: projectDue,
            },
            team: [],
        };

        try {
            await add('users', userId, user);
            message.success('Profile updated successfully');
        } catch (error) {
            message.error('Failed to update profile');
        }
    };
    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 w-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    프로필을 입력해주세요.
                </h2>
                <Form
                    form={form}
                    name="profileSetup"
                    onFinish={handleFinish}
                    layout="vertical"
                    className="space-y-4"
                >
                    <Form.Item
                        label="이름"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: '이름을 입력해주세요!',
                            },
                        ]}
                        className="mx-auto max-w-full"
                    >
                        <Input className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                    </Form.Item>

                    <Form.Item
                        label="나이"
                        name="age"
                        rules={[
                            {
                                required: true,
                                message: '나이를 입력해주세요!',
                            },
                        ]}
                        className="mx-auto max-w-full"
                    >
                        <Input
                            type="number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        />
                    </Form.Item>

                    <Form.Item
                        label="전화번호"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: '전화번호를 입력해주세요!',
                            },
                        ]}
                        className="mx-auto max-w-full"
                    >
                        <Input className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                    </Form.Item>

                    <Form.Item
                        label="프로필 이미지"
                        name="profileImg"
                        rules={[{ required: true, message: '프로필 이미지를 넣어주세요!' }]}
                        getValueFromEvent={normFile}
                    >
                        <Upload action="/upload.do" listType="picture-card">
                            <button
                                style={{ border: 0, background: 'none' }}
                                type="button"
                            >
                                <PlusOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </button>
                        </Upload>
                    </Form.Item>
                    {/* <Form.Item
                        label="프로필 이미지"
                        name="profileImg"
                        className="mx-auto w-full max-w-sm"
                    >
                        <Upload
                            customRequest={({ file, onSuccess }) => {
                                setFileList([file]);
                                onSuccess?.(file);
                            }}
                            showUploadList={false}
                            onChange={handleFileChange}
                            className="w-full"
                        >
                            <Button className="w-full bg-blue-500 text-white py-2 rounded-md">
                                Upload Profile Picture
                            </Button>
                        </Upload>
                    </Form.Item> */}

                    <Form.Item label="기술 스택" className="mx-auto w-full">
                        <SkillSelector
                            onSkillsSelected={handleSkillsSelected}
                        />
                    </Form.Item>

                    <Form.Item
                        label="GitHub ID"
                        name="githubId"
                        rules={[
                            {
                                required: true,
                                message: 'GitHub ID를 입력해주세요!',
                            },
                        ]}
                        className="mx-auto w-full"
                    >
                        <Input className="w-full px-4 py-2 border border-gray-300 rounded-md" />
                    </Form.Item>

                    <Form.Item
                        label="원하는 프로젝트 기간"
                        name="projectDue"
                        rules={[
                            {
                                required: true,
                                message: '원하는 프로젝트 기간을 입력해주세요!',
                            },
                        ]}
                        className="mx-auto w-full"
                    >
                        <Select className="w-full">
                            {dueDates.map((dueDate) => (
                                <Option key={dueDate} value={dueDate}>
                                    {dueDate}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item className="mx-auto w-full">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-md"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default ProfileSetupPage;
