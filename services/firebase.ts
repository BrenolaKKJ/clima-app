import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgQEOWSfqxBkZW2E2-pJw5ChWiu9d6y7k",
  authDomain: "clima-app-ec184.firebaseapp.com",
  projectId: "clima-app-ec184",
  storageBucket: "clima-app-ec184.firebasestorage.app",
  messagingSenderId: "342780936232",
  appId: "1:342780936232:web:7f6faf3f833311aa2f751d"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);