import ThumbNail from "../ThumbNail";
import styles from "./Videos.module.css";
import VideoDescription from "../VideoDescription";
import VideoWrapper from "../VideoWrapper";
import { Dialog, DialogTrigger, DialogContent } from "../VideoModal";
import VideoPlayer from "../VideoPlayer";

export default function Videos({ videos, className = "" }) {
  const appliedClass = `${styles.videos} ${className}`;
  return (
    <div className={appliedClass}>
      <Dialog>
        <DialogTrigger asChild>
          <VideoWrapper>
            <ThumbNail
              className={styles.recommendedThumbnail}
              src="./daddy-pigs-office.jpeg"
            />
            <VideoDescription title="Daddy pig's office" />
          </VideoWrapper>
        </DialogTrigger>
        <DialogContent>
          <VideoPlayer url="https://www.youtube.com/watch?v=ZJ6JfDSPD5U" />
        </DialogContent>
      </Dialog>

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
