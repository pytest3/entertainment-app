import styles from "./TrendingVideos.module.css";
import ThumbNail from "../ThumbNail";
import VideoWrapper from "../VideoWrapper";
import VideoDescription from "../VideoDescription";

export default function TrendingVideos() {
  return (
    <div className={styles.trendingVideos}>
      <VideoWrapper>
        <ThumbNail
          src="/ballet-lesson.jpeg"
          className={styles.trendingThumbNail}
        />
        <VideoDescription title="Ballet Lesson" variant="trending" />
      </VideoWrapper>
      <VideoWrapper>
        <ThumbNail
          src="/daddy-pigs-office.jpeg"
          className={styles.trendingThumbNail}
        />
        <VideoDescription title="Daddy pig's office" variant="trending" />
      </VideoWrapper>
      <VideoWrapper>
        <ThumbNail
          src="/peppas-first-glasses.jpeg"
          className={styles.trendingThumbNail}
        />
        <VideoDescription title="Peppa's first glasses" variant="trending" />
      </VideoWrapper>
      <VideoWrapper>
        <ThumbNail
          src="/peppa-pigs-family-computer.jpeg"
          className={styles.trendingThumbNail}
        />
        <VideoDescription
          title="Peppa pig's family computer"
          variant="trending"
        />
      </VideoWrapper>
    </div>
  );
}
