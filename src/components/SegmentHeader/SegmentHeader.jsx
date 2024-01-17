import styles from "./SegmentHeader.module.css";

export default function SegmentHeader({ children }) {
  return <div className={styles.segmentHeader}>{children}</div>;
}
