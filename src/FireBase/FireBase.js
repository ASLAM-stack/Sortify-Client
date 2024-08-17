
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWGf784xNGspR5QmC3cbt-apEe0v5wYbc",
  authDomain: "sortify-client.firebaseapp.com",
  projectId: "sortify-client",
  storageBucket: "sortify-client.appspot.com",
  messagingSenderId: "569044479406",
  appId: "1:569044479406:web:dc7d05c8fd995024b52c3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;