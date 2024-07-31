import { app } from "./firebaseApp";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  query,
  where,
} from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const add = async (col: string, data: Object) => {
  try {
    const docRef = await addDoc(collection(db, col), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const get = async (col: string) => {
  const querySnapshot = await getDocs(collection(db, col));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
};

export const getById = async (col: string, email: string) => {
  const q = query(collection(db, col), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};

export const set = async (col: string, docId: string, data: Object) => {
  await setDoc(doc(db, col, docId), data);
};
