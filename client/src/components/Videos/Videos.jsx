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
      {videos?.map((video) => (
        <Dialog key={video.id}>
          <DialogTrigger asChild>
            <VideoWrapper>
              <ThumbNail
                className={styles.recommendedThumbnail}
                src={video.thumbnail}
              />
              <VideoDescription title={video.title} />
            </VideoWrapper>
          </DialogTrigger>
          <DialogContent>
            <VideoPlayer url={video.url} />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
