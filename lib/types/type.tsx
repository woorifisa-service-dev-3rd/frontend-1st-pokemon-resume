export interface Users {
  id: string;
  password: string;
  phone: string;
  user_info: Resume;
}

export type DueDate = '1month' | '2month' | '3month' |
                      '4month' | '5month' | '6month' | 
                      '7month' | '8month' | '9month' | 
                      '10month' | '11month' | '12month';

export interface Resume {
  name: string;
  age: number;
  email: string;
  stack: Skill[];
  profile_img: string;
  github: string;
  projectDue: DueDate;
}
export interface Skill {
  name: string;
  img: string;
}
