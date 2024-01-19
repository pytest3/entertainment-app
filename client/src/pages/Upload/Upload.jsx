import React from "react";
import styles from "./Upload.module.css";
import { Form } from "react-router-dom";

export default function Upload() {
  const formRef = React.useRef();

  return (
    <div>
      <h1>Upload a new video</h1>
      <Form
        ref={formRef}
        style={{ color: "white", display: "grid" }}
        method="post"
        action="/test"
      >
        <label htmlFor="url">Url</label>
        <input
          id="url"
          name="url"
          type="text"
          defaultValue="https://www.youtube.com/watch?v=Zlp3Aif6jJA"
        ></input>

        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text"></input>

        <label htmlFor="thumbnail">Thumbnail src</label>
        <input id="thumbnail" name="thumbnail" type="text"></input>

        <label htmlFor="year">Year</label>
        <input id="year" name="year" type="number" defaultValue="2023"></input>

        <label htmlFor="type">Type</label>
        <input
          id="type"
          name="type"
          type="text"
          defaultValue="trending"
        ></input>

        <label htmlFor="bookmarked">Bookmarked</label>
        <input
          id="bookmarked"
          name="bookmarked"
          type="text"
          defaultValue="false"
        ></input>

        <button>Upload</button>
      </Form>
    </div>
  );
}
