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
import { getFirestore, doc, setDoc, addDoc, collection, orderBy, query, limit, Timestamp } from "firebase/firestore";
// getDocs, onSnapshot, QuerySnapshot, getDoc
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
    console.log('succes')
}

//const postsCollection = collection(db, 'posts')

// export const addNewPost = async (text, userID) => {
//   const date = Timestamp.fromDate(new Date())
//     try {
//         const newDoc = await addDoc(postsCollection, {
//             text: text,
//             userID: userID,
//             date: date,
//         })
//         console.log(`Post created at ${newDoc.path} and ${date.seconds}`)
//     }
//     catch(err) {
//         console.log(err)
//     }

// }

//export let unsubscribePosts;
export const postsQuery = query(
    collection(db, 'posts'),
    orderBy('date', 'desc'), 
    limit(10),
)

// export const queryForPosts = () => {
//     const postsQuery = query(
//         collection(db, 'posts'),
//         //orderBy(date),
//         limit(10),
//     )
//     let array = []

//     unsubscribePosts = onSnapshot(postsQuery, (querySnapshot) => {
//          return (querySnapshot.docs.map((e => array.push((e.data()))))) 
//     })

//     // const querySnapshot = await getDocs(postsQuery)
//     // const alldocs = querySnapshot.docs()

//     //console.log(alldocs)
//     //return alldocs
// }


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
