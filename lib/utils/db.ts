import { DocType } from "../types/type";
import { app } from "./firebaseApp";

import { getFirestore, collection, doc, setDoc, getDocs, query, where } from "firebase/firestore";

// Firestore 초기화
const db = getFirestore(app);

// collection에 document 추가
export const add = async (col: string, id: string, data: DocType) => {
  try {
    const docRef = doc(db, col, id);
    await setDoc(docRef, data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// collection 전체 document 조회
export const get = async (col: string) => {
  const querySnapshot = await getDocs(collection(db, col));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
};

// collection에서 id 값으로 document 조회
export const getById = async (col: string, id: string) => {
  const q = query(collection(db, col), where("id", "==", id));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs[0].id;
};

// collection에서 특정 document 수정
export const set = async (col: string, id: string, data: DocType) => {
  await setDoc(doc(db, col, id), data);
};
