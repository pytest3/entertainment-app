import TextInput from "../TextInput";
import styles from "./SearchBar.module.css";
import React from "react";
import { Search } from "lucide-react";

const SearchBar = React.forwardRef(
  ({ className = "", toggleSearchStatus, ...rest }, ref) => {
    const appliedClass = `${styles.searchBar} ${className}`;
    const [search, setSearch] = React.useState("");

    function handleInput(e) {
      const searchTerm = e.target.value;
      setSearch(searchTerm);
      toggleSearchStatus(searchTerm);
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
  }
);

export default SearchBar;
