import React from "react";
import styles from "./Button.module.css";

const Button = React.forwardRef(
  ({ variant = "primary", children, className = "", rest }, ref) => {
    const appliedClass = `${styles.button} ${className} ${styles[variant]}`;

    return (
      <button {...rest} ref={ref} className={appliedClass}>
        {children}
      </button>
    );
  }
);

export default Button;
