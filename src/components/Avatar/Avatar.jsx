import React from "react";
import styles from "./Avatar.module.css";

const Avatar = React.forwardRef(({ children, className = "" }, ref) => {
  const appliedClass = `${styles.avatar} ${className}`;
  return (
    <div ref={ref} className={appliedClass}>
      {children}
    </div>
  );
});

export default Avatar;
