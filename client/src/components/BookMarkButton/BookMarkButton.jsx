import { Form } from "react-router-dom";
import styles from "./BookMarkButton.module.css";
import { Bookmark } from "lucide-react";
import React from "react";

export default function BookMarkButton({
  id,
  isBookmarked,
  className = "",
  ...rest
}) {
  const bookmarkFormRef = React.useRef();
  const appliedWrapperClass = `${styles.iconWrapper} ${className} `;
  const appliedIconClass = `${styles.icon} ${
    isBookmarked ? styles.bookMarked : ""
  }`;

  return (
    <Form ref={bookmarkFormRef} method="PATCH" action=".">
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="bookmarked" value={isBookmarked} />
      <button
        type="submit"
        name="intent"
        value="updateIsBookmarked"
        {...rest}
        className={appliedWrapperClass}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <Bookmark className={appliedIconClass} strokeWidth={1.75} />
      </button>
    </Form>
  );
}
