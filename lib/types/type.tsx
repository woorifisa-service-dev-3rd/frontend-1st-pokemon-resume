// 프로젝트 희망 기간 변수
export type DueDate =
  | "1month"
  | "2month"
  | "3month"
  | "4month"
  | "5month"
  | "6month"
  | "7month"
  | "8month"
  | "9month"
  | "10month"
  | "11month"
  | "12month";

// User 테이블 구조
export interface User {
  id: string; // firebase 해시 값
  email: string;
  password: string;
  user_info: UserInfo;
  team: User[];
}

// UserInfo 테이블 구조
export interface UserInfo {
  name: string;
  age: number;
  phone: string;
  skill_stack: Skill[];
  profile_img: string;
  github_id: string;
  project_due: DueDate;
}

export interface Skill {
  name: string;
  img_url: string;
}
