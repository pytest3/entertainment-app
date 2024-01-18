import styles from "./VideoDescription.module.css";

export default function VideoDescription({
  title,
  year = 2023,
  type = "Book",
  variant = "recommended",
}) {
  return (
    <div className={styles.videoDescription}>
      <div className={`${styles[`${variant}-info`]} ${styles.videoInfo}`}>
        <span>{year}</span>
        <span>•</span>
        <span>{type}</span>
      </div>
      <h1 className={styles[`${variant}-title`]}>{title}</h1>
    </div>
  );
}
