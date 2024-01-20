import { redirect } from "react-router-dom";

const url = "http://localhost:3001/books";

export async function getAllBooks() {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  return res;
}

export async function deleteBook(id) {
  const res = await fetch(`${url}/${id}`, { method: "delete" });
  if (!res.ok) {
    throw new Error("Unable to delete book");
  }
  return res;
}

export async function uploadBook(bookObj) {
  let res = await fetch(url, {
    method: "post",
    body: JSON.stringify(bookObj),
  });
  const book = await res.json();
  if (book.error) {
    throw new Error(`Unable to upload book - error:${book.error}`);
  }
  return book;
}

export function booksLoader() {
  return getAllBooks();
}

export async function booksAction({ request }) {
  let formData = await request.formData();

  if (formData.get("action") === "delete") {
    const bookId = formData.get("id");
    deleteBook(bookId);
    return redirect("/home");
  }

  if (formData.get("action") === "upload") {
    let values = Object.fromEntries(formData); // get object
    const book = uploadBook(values);
    return redirect("/home"); // or redirect to '/books/{book.id}'
  }

  throw new Error("Action type is not accepted");
}
