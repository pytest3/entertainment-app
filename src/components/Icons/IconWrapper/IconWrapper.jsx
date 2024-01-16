import styles from "./IconWrapper.module.css";

export default function IconWrapper({ children }) {
  return <div className={styles.iconWrapper}>{children}</div>;
}
