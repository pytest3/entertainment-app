import React from "react";
import styles from "./ErrorPage.module.css";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className={styles.errorPage}>
      <h1>Opps!</h1>
      <div>Sorry an unexpected error has occurred</div>
      <div className={styles.errorMsg}>
        {error.status} - {error.statusText}
      </div>
      <Link to="/" className={styles.backBtn}>
        Back to safety
      </Link>
    </div>
  );
}
