import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyChKVYy_m_1jSlIvRCmRtBpmwXIEYrCTAc",
    authDomain: "bookingfoodapp-6e6e8.firebaseapp.com",
    databaseURL: "https://bookingfoodapp-6e6e8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bookingfoodapp-6e6e8",
    storageBucket: "bookingfoodapp-6e6e8.appspot.com",
    messagingSenderId: "246485758214",
    appId: "1:246485758214:web:b0fb37cde136a89c116e87"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};