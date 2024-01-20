import styles from "./TrendingVideos.module.css";
import ThumbNail from "../ThumbNail";
import VideoWrapper from "../VideoWrapper";
import VideoDescription from "../VideoDescription";
import { Dialog, DialogTrigger, DialogContent } from "../VideoModal";
import VideoPlayer from "../VideoPlayer";
import { useLoaderData } from "react-router-dom";

export default function TrendingVideos({ trendingVideos }) {
  return (
    <div className={styles.trendingVideos}>
      {trendingVideos.map(({ id, url, title, thumbnail }) => (
        <Dialog key={id}>
          <DialogTrigger asChild>
            <VideoWrapper>
              <ThumbNail src={thumbnail} className={styles.trendingThumbNail} />
              <VideoDescription title={title} variant="trending" />
            </VideoWrapper>
          </DialogTrigger>
          <DialogContent>
            <VideoPlayer url={url} />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
