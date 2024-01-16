import React from "react";
import styles from "./TextInput.module.css";

const TextInput = React.forwardRef(
  ({ name, required = true, children, className = "", ...rest }, ref) => {
    const id = React.useId();
    const [input, setInput] = React.useState("");
    const appliedClass = `${styles.input} ${className}`;

    function handleInput(e) {
      setInput(e.target.value);
    }

    return (
      <input
        className={appliedClass}
        onChange={handleInput}
        value={input}
        {...rest}
        required={required}
        id={id}
        name={name}
        ref={ref}
        type="text"
        placeholder={children}
      ></input>
    );
  }
);

export default TextInput;
