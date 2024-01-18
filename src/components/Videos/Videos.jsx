import ThumbNail from "../ThumbNail";
import styles from "./Videos.module.css";
import VideoDescription from "../VideoDescription";
import VideoWrapper from "../VideoWrapper";

export default function Videos({ videos, className = "" }) {
  const appliedClass = `${styles.videos} ${className}`;
  return (
    <div className={appliedClass}>
      <VideoWrapper>
        <ThumbNail
          className={styles.recommendedThumbnail}
          src="./daddy-pigs-office.jpeg"
        />
        <VideoDescription title="Daddy pig's office" />
      </VideoWrapper>
      <VideoWrapper>
        <ThumbNail
          className={styles.recommendedThumbnail}
          src="./ballet-lesson.jpeg"
        />
        <VideoDescription title="Ballet Lesson" />
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
        <VideoDescription title="Ballet Lesson" />
      </VideoWrapper>
    </div>
  );
}
