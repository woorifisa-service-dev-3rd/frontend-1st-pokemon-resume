export interface Users {
  id: string;
  password: string;
  phone: string;
  user_info: UserInfo;
}

export type DueDate = '1month' | '2month' | '3month' |
                      '4month' | '5month' | '6month' | 
                      '7month' | '8month' | '9month' | 
                      '10month' | '11month' | '12month';

export interface UserInfo {
  name: string;
  age: number;
  email: string;
  skill_stack: Skill[];
  profile_img: string;
  github_id: string;
  project_due: DueDate;
}
export interface Skill {
  name: string;
  img_url: string;
}
