const { initializeApp } = require('firebase/app');
// import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDzSNb0hWupGp4lZA3Zat_fgFtJyTlKIKc",
  authDomain: "chefcitoosapp-6371a.firebaseapp.com",
  projectId: "chefcitoosapp-6371a",
  storageBucket: "chefcitoosapp-6371a.appspot.com",
  messagingSenderId: "15580983897",
  appId: "1:15580983897:web:ef91c2504a317c5916f748",
  measurementId: "G-9QX97S1WSX"
};
const getApp = () => {
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    return app;
  };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

module.exports = getApp;
