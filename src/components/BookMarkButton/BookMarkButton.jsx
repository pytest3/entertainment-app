import styles from "./BookMarkButton.module.css";
import { Bookmark } from "lucide-react";

export default function BookMarkButton({
  className = "",
  isBookmarked,
  ...rest
}) {
  const appliedWrapperClass = `${styles.iconWrapper} ${className} `;

  const appliedIconClass = `${styles.icon} ${
    isBookmarked ? styles.bookMarked : ""
  }`;

  return (
    <div {...rest} className={appliedWrapperClass}>
      <Bookmark className={appliedIconClass} strokeWidth={1.75} />
    </div>
  );
}
