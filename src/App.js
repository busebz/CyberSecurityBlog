import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import InfoPage from "./pages/InfoPage";
import PostDetailPage from "./pages/PostDetail";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import NewPostPage from "./pages/NewPostPage";
import LogoutPage from "./pages/Logout";
import EditPostPage from './pages/EditPostPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/info", element: <InfoPage /> },
      { path: "/new", element: <NewPostPage /> },
      { path: "/:postId", element: <PostDetailPage /> },
      { path: "/:postId/edit", element: <EditPostPage /> },
      { path: "/logout", element: <LogoutPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
