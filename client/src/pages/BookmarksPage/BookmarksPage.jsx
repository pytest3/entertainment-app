import { useLoaderData, useOutletContext } from "react-router-dom";
import PageTemplate from "../PageTemplate";
import styles from "./BookmarksPage.module.css";

export default function BookmarksPage() {
  const books = useLoaderData();
  const bookmarkedBooks = books.filter((book) => book.bookmarked === "true");

  if (bookmarkedBooks.length === 0) {
    return <div className={styles.emptyBookmarks}>No bookmarks</div>;
  }

  return <PageTemplate header="Bookmarked Books" videos={bookmarkedBooks} />;
}
