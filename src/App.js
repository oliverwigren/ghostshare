import React, {useEffect, useState} from 'react';
import './App.css';
import HeaderArea from './components/HeaderArea';
import FeedArea from './components/FeedArea';
import CreatePost from './components/CreatePost';
import Root from './components/Root'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
//import db from './components/firebase'
import {queryForPosts, unsubscribePosts} from './components/Firebase'

function App() {
  //const [posts, setPosts] = useState([{text: 'Jag älskar matte.', userID: 1}, {text: 'Och jag älskar programmering!', userID: 2}])

  // useEffect(() => {
  //   setPosts(queryForPosts())

  // },[])


  const appRouter = createBrowserRouter(createRoutesFromElements(<Route path='/' element={<Root />} >
    <Route path='post' element={<CreatePost />} />
    <Route index element={<FeedArea />} />
  </Route>))

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
