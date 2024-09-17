
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCiyyf2PnDIn5c1wDRYvuWrXSbEdW0v1t8",
  authDomain: "minhaj-web.firebaseapp.com",
  projectId: "minhaj-web",
  storageBucket: "minhaj-web.appspot.com",
  messagingSenderId: "597140973488",
  appId: "1:597140973488:web:a433af32707d1550eb5875",
  measurementId: "G-9BD90D2TQR"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);






export {auth, db, storage }