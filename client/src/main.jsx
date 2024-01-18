import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root/Root.jsx";
import ErrorPage from "./pages/Root/ErrorPage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import BookmarksPage from "./pages/BookmarksPage";
import BooksPage from "./pages/BooksPage";

const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <ErrorPage /> },
  {
    element: <Layout />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "bookmarks", element: <BookmarksPage /> },
      { path: "books", element: <BooksPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
