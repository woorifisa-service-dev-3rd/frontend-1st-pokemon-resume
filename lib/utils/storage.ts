import { getStorage, ref, uploadBytes } from "firebase/storage";

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const profileRef = ref(storage, "profile");

export const upload = (file: File) => {
  uploadBytes(profileRef, file)
    .then((snapshot) => {
      console.log("Upload file!!!", snapshot);
    })
    .catch((error) => {
      console.error("Upload failed", error);
    });
};
