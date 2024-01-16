import styles from "./NavBar.module.css";
import LogoIcon from "../Icons/LogoIcon";
import Avatar from "../Avatar";
import HomeIcon from "../Icons/HomeIcon";
import BookIcon from "../Icons/BookIcon";
import BookMarkIcon from "../Icons/BookMarkIcon";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
      <LogoIcon />
      <div className={styles.actions}>
        <HomeIcon />
        <BookIcon />
        <BookMarkIcon />
      </div>
      <Avatar />
    </div>
  );
}
