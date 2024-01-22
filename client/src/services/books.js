import {
  redirect,
  useActionData,
  useLocation,
  useNavigate,
} from "react-router-dom";

// const url = `${import.meta.env.VITE_BACKEND_URL}/api/books`;
const url = `/api/books`;

export async function getAllBooks() {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  return res;
}

export async function deleteBook(id) {
  const res = await fetch(`${url}/${id}`, { method: "DELETE" });
  if (!res.ok) {
    throw new Error("Unable to delete book");
  }
  return res;
}

export async function uploadBook(bookObj) {
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(bookObj),
  });
  const book = await res.json();
  if (book.error) {
    throw new Error(`Unable to upload book - error:${book.error}`);
  }
  return book;
}

export function booksLoader() {
  console.log("books loader ran");
  return getAllBooks();
}

export async function booksAction({ request }) {
  let formData = await request.formData();

  if (formData.get("intent") === "delete") {
    const bookId = formData.get("id");
    deleteBook(bookId);
    return redirect("/home");
  }
  if (formData.get("intent") === "upload") {
    let values = Object.fromEntries(formData); // change formData object into regular JS object
    const book = uploadBook(values);
    return redirect("/home"); // or redirect to '/books/{book.id}'
  }
  if (formData.get("intent") === "updateIsBookmarked") {
    const id = formData.get("id"); // string
    const bookmarked = formData.get("bookmarked"); // string
    updateIsBookmarked(id, bookmarked);
    return bookmarked;
  }
  throw new Error("Action type is not accepted");
}

export async function updateIsBookmarked(id, bookmarked) {
  const bookmarkedBoolean = bookmarked === "true";
  const nextBookmarked = !bookmarkedBoolean;
  const res = await fetch(`${url}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ bookmarked: nextBookmarked.toString() }),
  });
  const book = await res.json();
  if (book.error) {
    throw new Error(`Error updating book id: ${id} - error: ${book.error}`);
  }
  return book;
}
