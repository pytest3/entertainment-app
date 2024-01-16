import TextInput from "../TextInput";
import styles from "./SearchBar.module.css";
import React from "react";

const SearchBar = React.forwardRef(
  ({ icon: Icon, className = "", ...rest }, ref) => {
    const appliedClass = `${styles.searchBar} ${className}`;
    const [search, setSearch] = React.useState("");
    function handleInput(e) {
      setSearch(e.target.value);
    }
    return (
      <div className={appliedClass}>
        <Icon className={styles.icon} />
        <TextInput
          onChange={handleInput}
          {...rest}
          className={styles.textInput}
          ref={ref}
          value={search}
        ></TextInput>
      </div>
    );
  }
);

export default SearchBar;
