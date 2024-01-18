import styles from "./VideoWrapper.module.css";
import React from "react";

const VideoWrapper = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <div className={styles.videoWrapper} {...props} ref={ref}>
      {children}
    </div>
  );
});

export default VideoWrapper;
