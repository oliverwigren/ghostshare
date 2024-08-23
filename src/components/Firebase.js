/*import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFKQqsvFcQ20np8g1yXp6ewnQkoKe3kn4",
  authDomain: "ghostshare-f234e.firebaseapp.com",
  projectId: "ghostshare-f234e",
  storageBucket: "ghostshare-f234e.appspot.com",
  messagingSenderId: "614794423461",
  appId: "1:614794423461:web:c5e78d60db70b8d498714c",
  measurementId: "G-C8N5KZ1RD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const db = getFirestore(app)

export default db;*/

//import firebase from "firebase";
//import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, addDoc, collection, orderBy, query, limit, getDocs, onSnapshot, QuerySnapshot } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCFKQqsvFcQ20np8g1yXp6ewnQkoKe3kn4",
    authDomain: "ghostshare-f234e.firebaseapp.com",
    projectId: "ghostshare-f234e",
    storageBucket: "ghostshare-f234e.appspot.com",
    messagingSenderId: "614794423461",
    appId: "1:614794423461:web:c5e78d60db70b8d498714c",
    measurementId: "G-C8N5KZ1RD5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore();

export const addUser =  (username, password, id) => {
    const userPath = doc(db, `users/${username}`)
    const data = {
        username: username,
        password: password,
        id: id,
      }
     setDoc(userPath, data)
    console.log('succes')
}

const postsCollection = collection(db, 'posts')

export const addNewPost = async (text, userID) => {
    try {
        const newDoc = await addDoc(postsCollection, {
            text: text,
            userID: userID,
        })
        console.log(`Post created at ${newDoc.path}`)
    }
    catch(err) {
        console.log(err)
    }

}

export let unsubscribePosts;

export const queryForPosts = async () => {
    const postsQuery = query(
        collection(db, 'posts'),
        //orderBy(date),
        limit(10),
    )

    unsubscribePosts = onSnapshot(postsQuery, (querySnapshot) => {
        return JSON.stringify(querySnapshot.docs.map((e => e.data())))
    })
}

