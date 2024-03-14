// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE6KQNVlzLjwKT1DLynzIubQBMN5K-zQU",
  authDomain: "avenger-2017d.firebaseapp.com",
  projectId: "avenger-2017d",
  storageBucket: "avenger-2017d.appspot.com",
  messagingSenderId: "347924954526",
  appId: "1:347924954526:web:037164b07a6a566255aa8f"
};

// Initialize Firebase
export  const  app = initializeApp(firebaseConfig);
export const auth = getAuth(app);