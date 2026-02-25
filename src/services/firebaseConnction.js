import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
import { getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "queueup-66f7e.firebaseapp.com",
  projectId: "queueup-66f7e",
  storageBucket: "queueup-66f7e.firebasestorage.app",
  messagingSenderId: "246629693228",
  appId: "1:246629693228:web:bcba1db83f9cdea59f9e89",
  measurementId: "G-TYGJ0P6G6Z"
};

const firebaseApp = initializeApp(firebaseConfig);
