// lib/utils/storage.ts
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "@/lib/utils/firebaseApp";


const storage = getStorage(app);

export const upload = (file: File) => {
  console.log(process.env.STORAGE_BUCKET);

  const fileRef = ref(storage, `profile/${file.name}`)
  console.log(file);

  uploadBytes(fileRef, file)
    .then((snapshot) => {
      console.log("파일 업로드 성공!", snapshot);
    })
    .catch((error) => {
      console.error("업로드 실패", error);
    });
};


export const getimg = async () => {
  const starsRef = ref(storage, 'profile/image.png');
  const url = await getDownloadURL(starsRef);
  console.log(url);
  return url;
}