const { initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const { v4 } = require('uuid');

const firebaseConfig = {
  apiKey: "AIzaSyDzSNb0hWupGp4lZA3Zat_fgFtJyTlKIKc",
  authDomain: "chefcitoosapp-6371a.firebaseapp.com",
  projectId: "chefcitoosapp-6371a",
  storageBucket: "chefcitoosapp-6371a.appspot.com",
  messagingSenderId: "15580983897",
  appId: "1:15580983897:web:ef91c2504a317c5916f748",
  measurementId: "G-9QX97S1WSX"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

async function uploadFile(file) {
  const storageRef = ref(storage, v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}

module.exports = uploadFile;