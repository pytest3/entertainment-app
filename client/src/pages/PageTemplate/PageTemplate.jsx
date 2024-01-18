import MainLayoutOutletWrapper from "../../components/MainLayoutOutletWrapper";
import Videos from "../../components/Videos";
import SegmentHeader from "../../components/SegmentHeader";

export default function PageTemplate({ header, videos = [] }) {
  return (
    <MainLayoutOutletWrapper>
      <SegmentHeader>{header}</SegmentHeader>
      <Videos videos={videos} />
    </MainLayoutOutletWrapper>
  );
}
