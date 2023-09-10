import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGcRZjJtBJVaLCbLddU8ru95MobJwZNdk",
  authDomain: "shop-962b7.firebaseapp.com",
  databaseURL: "https://shop-962b7-default-rtdb.firebaseio.com",
  projectId: "shop-962b7",
  storageBucket: "shop-962b7.appspot.com",
  messagingSenderId: "328206947924",
  appId: "1:328206947924:web:1bc77223db7784422bffc1",
  measurementId: "G-1ETPYMES1T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {app, auth,db};

