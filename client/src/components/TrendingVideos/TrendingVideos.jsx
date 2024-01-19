import styles from "./TrendingVideos.module.css";
import ThumbNail from "../ThumbNail";
import VideoWrapper from "../VideoWrapper";
import VideoDescription from "../VideoDescription";
import { Dialog, DialogTrigger, DialogContent } from "../VideoModal";
import VideoPlayer from "../VideoPlayer";
import { useLoaderData } from "react-router-dom";

export default function TrendingVideos() {
  const videos = useLoaderData();

  // return (
  //   <div className={styles.trendingVideos}>
  //     <Dialog>
  //       <DialogTrigger asChild>
  //         <VideoWrapper>
  //           <ThumbNail
  //             src="/ballet-lesson.jpeg"
  //             className={styles.trendingThumbNail}
  //           />
  //           <VideoDescription title="Ballet Lesson" variant="trending" />
  //         </VideoWrapper>
  //       </DialogTrigger>
  //       <DialogContent>
  //         <VideoPlayer url="https://www.youtube.com/watch?v=ZJ6JfDSPD5U" />
  //       </DialogContent>
  //     </Dialog>

  //     <VideoWrapper>
  //       <ThumbNail
  //         src="/daddy-pigs-office.jpeg"
  //         className={styles.trendingThumbNail}
  //       />
  //       <VideoDescription title="Daddy pig's office" variant="trending" />
  //     </VideoWrapper>
  //     <VideoWrapper>
  //       <ThumbNail
  //         src="/peppas-first-glasses.jpeg"
  //         className={styles.trendingThumbNail}
  //       />
  //       <VideoDescription title="Peppa's first glasses" variant="trending" />
  //     </VideoWrapper>
  //     <VideoWrapper>
  //       <ThumbNail
  //         src="/peppa-pigs-family-computer.jpeg"
  //         className={styles.trendingThumbNail}
  //       />
  //       <VideoDescription
  //         title="Peppa pig's family computer"
  //         variant="trending"
  //       />
  //     </VideoWrapper>
  //   </div>
  // );

  return (
    <div className={styles.trendingVideos}>
      {videos.map(({ id, url, title, thumbnail }) => (
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
