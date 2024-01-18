import styles from "./VideoWrapper.module.css";

export default function VideoWrapper({ children }) {
  return <div className={styles.videoWrapper}>{children}</div>;
}
