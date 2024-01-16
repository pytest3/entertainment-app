import styles from "./BookMarkButton.module.css";
import { Bookmark } from "lucide-react";

export default function BookMarkButton({ className = "", ...rest }) {
  const appliedClass = `${styles.iconWrapper} ${className}`;
  return (
    <div {...rest} className={appliedClass}>
      <Bookmark className={styles.icon} strokeWidth={1.75} />
    </div>
  );
}
