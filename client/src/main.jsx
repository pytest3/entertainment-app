import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root/Root.jsx";
import ErrorPage from "./pages/Root/ErrorPage/index.js";
import Layout from "./components/Layout/index.js";
import HomePage from "./pages/HomePage/index.js";
import BookmarksPage from "./pages/BookmarksPage/index.js";
import BooksPage from "./pages/BooksPage/index.js";
import Upload from "./pages/Upload/Upload.jsx";
import { booksLoader, booksAction } from "./services/books.js";

const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <ErrorPage /> },
  {
    element: <Layout />,
    loader: booksLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />,
        loader: booksLoader,
        action: booksAction,
      },
      {
        path: "bookmarks",
        element: <BookmarksPage />,
        loader: booksLoader,
        action: booksAction,
      },
      {
        path: "books",
        element: <BooksPage />,
        loader: booksLoader,
      },
      {
        path: "upload",
        element: <Upload />,
        action: booksAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
