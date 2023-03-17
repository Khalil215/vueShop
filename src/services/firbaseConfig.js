import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAOHsl7poBfUQ2uS2awqrUt4DLYwcCkQuM",
  authDomain: "vue-shop-57082.firebaseapp.com",
  projectId: "vue-shop-57082",
  storageBucket: "vue-shop-57082.appspot.com",
  messagingSenderId: "173291193910",
  appId: "1:173291193910:web:70ceca153a1af65dc47a97"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore(app)

export {auth, db}