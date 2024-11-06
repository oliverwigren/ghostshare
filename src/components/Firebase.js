import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, addDoc, collection, orderBy, query, limit, Timestamp } from "firebase/firestore";
// getDocs, onSnapshot, QuerySnapshot, getDoc
// const firebaseConfig = {
//     apiKey: "AIzaSyCFKQqsvFcQ20np8g1yXp6ewnQkoKe3kn4",
//     authDomain: "ghostshare-f234e.firebaseapp.com",
//     projectId: "ghostshare-f234e",
//     storageBucket: "ghostshare-f234e.appspot.com",
//     messagingSenderId: "614794423461",
//     appId: "1:614794423461:web:c5e78d60db70b8d498714c",
//     measurementId: "G-C8N5KZ1RD5"
//   };
import { firebaseConfig } from "../firebaseConfig";

// Initialize Firebase
// eslint-disable-next-line
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
    console.log('success')
}

//export let unsubscribePosts;
export const postsQuery = query(
    collection(db, 'posts'),
    orderBy('date', 'desc'), 
    limit(10),
)

export const createPost = async (text, userID) => {
  const date = Timestamp.fromDate(new Date())
    try {
        const docRef = await addDoc(collection(db, "posts"), {
          text: text,
          userID: userID,
          date: date,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
