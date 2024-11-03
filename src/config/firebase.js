// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa5YI9VQJSYOQMo8CLsWGP1XsiLzeMuJQ",
  authDomain: "my-todo-246.firebaseapp.com",
  projectId: "my-todo-246",
  storageBucket: "my-todo-246.appspot.com",
  messagingSenderId: "230942235515",
  appId: "1:230942235515:web:155c3930c54be4be39bbde",
  measurementId: "G-P1BHTR42WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);