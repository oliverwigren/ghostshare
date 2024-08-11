import React, {useState} from 'react';
import './App.css';
import HeaderArea from './components/HeaderArea';
import FeedArea from './components/FeedArea';
import CreatePost from './components/CreatePost';
import Root from './components/Root'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'

function App() {
  const [posts, setPosts] = useState([{text: 'Jag älskar matte.'}, {text: 'Och jag älskar programmering!'}])

  const appRouter = createBrowserRouter(createRoutesFromElements(<Route path='/' element={<Root />} >
    <Route path='post' element={<CreatePost setPosts={setPosts} />} />
    <Route index element={<FeedArea posts={posts} />} />
  </Route>))

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
