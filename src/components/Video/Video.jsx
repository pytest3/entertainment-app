import React from "react";
import VideoWrapper from "../VideoWrapper";
import ThumbNail from "../ThumbNail";
import VideoDescription from "../VideoDescription";
import styles from "./Video.module.css";

export default function Video({ src }) {
  return (
    <VideoWrapper>
      <ThumbNail
        src="/ballet-lesson.jpeg"
        className={styles.trendingThumbNail}
      />
      <VideoDescription title="Ballet Lesson" variant="trending" />
    </VideoWrapper>
  );
}
