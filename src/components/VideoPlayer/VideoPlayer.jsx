import ReactPlayer from "react-player";

export default function VideoPlayer({ url }) {
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      url={url}
      className="react-player"
      playing
    />
  );
}
