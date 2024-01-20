import Videos from "../../components/Videos";
import SegmentHeader from "../../components/SegmentHeader";
import TrendingVideos from "../../components/TrendingVideos";
import styles from "./HomePage.module.css";
import { useLoaderData } from "react-router-dom";

export default function HomePage() {
  const videos = useLoaderData();

  const trendingVideos = videos.sort(() => 0.5 - Math.random()).slice(0, 5);
  const recommendedVideos = videos.sort(() => 0.5 - Math.random()).slice(0, 8);

  return (
    <div className={styles.homePage}>
      <div className={styles.trendingSegment}>
        <SegmentHeader>Trending</SegmentHeader>
        <TrendingVideos trendingVideos={trendingVideos} />
      </div>
      <div className={styles.recommendedSegment}>
        <SegmentHeader>Recommended for you</SegmentHeader>
        <Videos videos={recommendedVideos} />
      </div>
    </div>
  );
}
