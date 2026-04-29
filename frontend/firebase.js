import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQ8oc2t8Lsa14DsguZog_WArzxv3NkiOY",
  authDomain: "digitalcardapp-e7a7b.firebaseapp.com",
  projectId: "digitalcardapp-e7a7b",
  storageBucket: "digitalcardapp-e7a7b.firebasestorage.app",
  messagingSenderId: "909002013778",
  appId: "1:909002013778:web:716ce0ff86e221df3e738b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);