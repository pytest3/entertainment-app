import Videos from "../../components/Videos";
import SegmentHeader from "../../components/SegmentHeader";
import TrendingVideos from "../../components/TrendingVideos";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.trendingSegment}>
        <SegmentHeader>Trending</SegmentHeader>
        <TrendingVideos />
      </div>
      <div className={styles.recommendedSegment}>
        <SegmentHeader>Recommended for you</SegmentHeader>
        <Videos />
      </div>
    </div>
  );
}
