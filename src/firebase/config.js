import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD999v-w2x5A4luskRV9thCVkwK5ZqcrO8",
  authDomain: "authtodoapp-92513.firebaseapp.com",
  projectId: "authtodoapp-92513",
  storageBucket: "authtodoapp-92513.appspot.com",
  messagingSenderId: "435082796573",
  appId: "1:435082796573:web:368a811088b9355080f0f4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
