import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBevnpBBWnexT2K9k3B1s4YAQG2OvEu5ZA",
  authDomain: "poeticpreserves.firebaseapp.com",
  projectId: "poeticpreserves",
  storageBucket: "poeticpreserves.appspot.com",
  messagingSenderId: "314267636156",
  appId: "1:314267636156:web:2c5dac4824e8345fa95bb9",
  measurementId: "G-8S9YG2XN8L"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);
export const db = getFirestore(app);