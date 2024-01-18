import styles from "./MainLayoutOutletWrapper.module.css";

export default function MainLayoutOutletWrapper({ children }) {
  return <div className={styles.mainLayoutOutletWrapper}>{children}</div>;
}
