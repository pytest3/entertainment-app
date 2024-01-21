import ThumbNail from "../ThumbNail";
import styles from "./Videos.module.css";
import VideoDescription from "../VideoDescription";
import VideoWrapper from "../VideoWrapper";
import { Dialog, DialogTrigger, DialogContent } from "../VideoModal";
import VideoPlayer from "../VideoPlayer";
import React from "react";

const Videos = React.memo(({ videos, className = "" }) => {
  const appliedClass = `${styles.videos} ${className}`;
  return (
    <div className={appliedClass}>
      {videos?.map(({ id, thumbnail, bookmarked, title, url }) => (
        <Dialog key={id}>
          <DialogTrigger asChild>
            <VideoWrapper>
              <ThumbNail
                id={id}
                className={styles.recommendedThumbnail}
                src={thumbnail}
                bookmarked={bookmarked}
              />
              <VideoDescription title={title} />
            </VideoWrapper>
          </DialogTrigger>
          <DialogContent>
            <VideoPlayer url={url} />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
});

export default Videos;
