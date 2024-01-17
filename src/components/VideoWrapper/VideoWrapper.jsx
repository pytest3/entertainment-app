import styles from "./VideoWrapper.module.css";
import React from "react";

export default function VideoWrapper({ children }) {
  return <div className={styles.videoWrapper}>{children}</div>;
}
