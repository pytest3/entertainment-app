import Videos from "../../components/Videos";
import SegmentHeader from "../../components/SegmentHeader";
import TrendingVideos from "../../components/TrendingVideos";
import styles from "./HomePage.module.css";
import { useLoaderData, useLocation } from "react-router-dom";
import React from "react";

export default function HomePage() {
  const videos = useLoaderData();

  const trendingVideos = React.useMemo(() => videos.slice(0, 6), [videos]);

  const recommendedVideos = React.useMemo(() => videos.slice(6), [videos]);

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
