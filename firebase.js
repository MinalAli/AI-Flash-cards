// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM7MB9imOFYQF9fG6_PRNApiy8w0ScehU",
  authDomain: "flashcardsaas-9f358.firebaseapp.com",
  projectId: "flashcardsaas-9f358",
  storageBucket: "flashcardsaas-9f358.appspot.com",
  messagingSenderId: "72435368789",
  appId: "1:72435368789:web:559ccaa772a141217025dc",
  measurementId: "G-1BZ0E5RPNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);