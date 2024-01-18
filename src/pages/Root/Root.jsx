import { Link } from "react-router-dom";
import styles from "./Root.module.css";

export default function Root() {
  return (
    <div className={styles.root}>
      <h1>Welcome</h1>
      <Link to="home" className={styles.homeBtn}>
        To home page
      </Link>
    </div>
  );
}
