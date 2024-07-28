
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBn1PGdQ0Jo_h1xfG85rSieVcKHbosljsg",
    authDomain: "auth-bylogin.firebaseapp.com",
    projectId: "auth-bylogin",
    storageBucket: "auth-bylogin.appspot.com",
    messagingSenderId: "381041596897",
    appId: "1:381041596897:web:a77fdf4b5f174dde8d9aa0",
    measurementId: "G-BV11GQMW0P"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  export const storage = getStorage(app);