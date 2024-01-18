import TextInput from "../TextInput";
import styles from "./SearchBar.module.css";
import React from "react";
import { Search } from "lucide-react";

const SearchBar = React.forwardRef(({ className = "", ...rest }, ref) => {
  const appliedClass = `${styles.searchBar} ${className}`;
  const [search, setSearch] = React.useState("");
  function handleInput(e) {
    setSearch(e.target.value);
  }
  return (
    <div className={appliedClass}>
      <Search className={styles.icon} />
      <TextInput
        onChange={handleInput}
        {...rest}
        className={styles.textInput}
        ref={ref}
        value={search}
      ></TextInput>
    </div>
  );
});

export default SearchBar;
