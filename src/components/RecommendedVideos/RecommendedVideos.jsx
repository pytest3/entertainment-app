import ThumbNail from "../ThumbNail";
import styles from "./RecommendedVideos.module.css";
import VideoDescription from "../VideoDescription";
import VideoWrapper from "../VideoWrapper";

export default function RecommendedVideos() {
  return (
    <div className={styles.recommendedVideos}>
      <VideoWrapper>
        <ThumbNail
          className={styles.recommendedThumbnail}
          src="./daddy-pigs-office.jpeg"
        />
        <VideoDescription title="Daddy pig's office" variant="recommended" />
      </VideoWrapper>
      <VideoWrapper>
        <ThumbNail
          className={styles.recommendedThumbnail}
          src="./ballet-lesson.jpeg"
        />
        <VideoDescription title="Ballet Lesson" variant="recommended" />
      </VideoWrapper>
      <VideoWrapper>
        <ThumbNail
          className={styles.recommendedThumbnail}
          src="./peppa-pigs-family-computer.jpeg"
        />
        <VideoDescription
          title="Peppa pig's family computer"
          variant="recommended"
        />
      </VideoWrapper>
      <VideoWrapper>
        <ThumbNail
          className={styles.recommendedThumbnail}
          src="./ballet-lesson.jpeg"
        />
        <VideoDescription title="Ballet Lesson" variant="recommended" />
      </VideoWrapper>
    </div>
  );
}
