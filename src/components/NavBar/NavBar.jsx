import styles from "./NavBar.module.css";
import LogoIcon from "../Icons/LogoIcon";
import Avatar from "../Avatar";
import HomeIcon from "../Icons/HomeIcon";
import BookIcon from "../Icons/BookIcon";
import BookMarkIcon from "../Icons/BookMarkIcon";
import { Link } from "react-router-dom";

export default function NavBar({ className }) {
  const appliedClass = `${styles.navBar} ${className}`;
  return (
    <div className={appliedClass}>
      <LogoIcon />
      <div className={styles.actions}>
        <Link to="home">
          <HomeIcon />
        </Link>
        <Link to="books">
          <BookIcon />
        </Link>
        <Link to="bookmarks">
          <BookMarkIcon />
        </Link>
      </div>
      <Avatar />
    </div>
  );
}
