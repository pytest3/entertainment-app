import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root/Root.jsx";
import ErrorPage from "./pages/Root/ErrorPage/index.js";
import Layout from "./components/Layout/index.js";
import HomePage from "./pages/HomePage/index.js";
import BookmarksPage from "./pages/BookmarksPage/index.js";
import BooksPage from "./pages/BooksPage/index.js";
import Upload from "./pages/Upload/Upload.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Root />, errorElement: <ErrorPage /> },
  {
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
        loader: async function () {
          return await fetch("http://localhost:3001/books");
        },
      },
      { path: "bookmarks", element: <BookmarksPage /> },
      { path: "books", element: <BooksPage /> },
      {
        path: "upload",
        element: <Upload />,
        action: async function ({ request }) {
          const url = "http://localhost:3001/books";
          let values = Object.fromEntries(await request.formData());
          let res = await fetch(url, {
            method: "post",
            body: JSON.stringify(values),
          });
          let newBook = res.json();
          if (newBook.error) throw new Error(`error: ${newBook.error}`);
          return redirect("/home");
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
