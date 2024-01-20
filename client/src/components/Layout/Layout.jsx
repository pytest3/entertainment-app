import React from "react";
import styles from "./Layout.module.css";
import NavBar from "../NavBar";
import SearchBar from "../SearchBar";
import { Outlet } from "react-router";
import PageTemplate from "../../pages/PageTemplate";
import { useLoaderData } from "react-router-dom";

export default function Layout() {
  const [searchStatus, setSearchStatus] = React.useState({
    isSearching: false,
    searchTerm: "",
  });

  const videos = useLoaderData();
  console.log(videos);

  const filteredVideos = videos.filter((video) =>
    video?.title.includes(searchStatus.searchTerm)
  );

  function toggleSearchStatus(searchTerm) {
    if (searchTerm.length > 0) {
      setSearchStatus({
        ...searchStatus,
        isSearching: true,
        searchTerm: searchTerm,
      });
    } else {
      setSearchStatus({
        ...searchStatus,
        isSearching: false,
        searchTerm: "",
      });
    }
  }

  return (
    <div className={styles.contentGrid}>
      <NavBar className={styles.navBar} />
      <SearchBar
        className={styles.searchBar}
        toggleSearchStatus={toggleSearchStatus}
      >
        Search for movies or TV series
      </SearchBar>
      {searchStatus.isSearching ? (
        <PageTemplate
          header={`Found ${filteredVideos.length} results for ${searchStatus.searchTerm}`}
          videos={filteredVideos}
        />
      ) : (
        <Outlet />
      )}
    </div>
  );
}
