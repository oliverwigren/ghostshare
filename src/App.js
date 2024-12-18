import React, { useState } from "react";
import "./App.css";
import FeedArea from "./components/FeedArea";
import CreatePost from "./components/CreatePost";
import CreateAccount from "./components/CreateAccount";
import Login from './components/Login'
import Root from "./components/Root";
import Root2 from './components/Root2'
import Landing from './components/Landing'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

function App() {
  const [isLogin, setLogin] = useState(false);

  // Checks if user is logged in and routes the user to either the login page or the feed

  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      isLogin ? (
        <Route path="/" element={<Root setAuth={setLogin} />}>
          <Route path="post" element={<CreatePost />} />
          <Route index element={<FeedArea />} />
        </Route>
      ) : (
        <Route path="/" element={<Root2 />}>
          <Route index element={<Landing />} ></Route>
          <Route path="create" element={<CreateAccount setAuth={setLogin} isAuth={isLogin} />}></Route>
          <Route path="login" element={<Login setAuth={setLogin} />} > </Route>
        </Route>
      )
    )
  );

  return <RouterProvider router={appRouter} />;
}

export default App;
