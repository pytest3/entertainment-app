import React from "react";
import styles from "./ThumbNail.module.css";
import PlayButton from "../PlayButton";
import BookMarkButton from "../BookMarkButton";

const ThumbNail = React.forwardRef(
  ({ id, bookmarked, src, className = "", ...rest }, ref) => {
    const [isHover, setIsHover] = React.useState(false);
    const appliedStyles = `${styles.thumbNail} ${className}`;
    return (
      <div
        {...rest}
        ref={ref}
        className={appliedStyles}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        <div className={styles.overlay} />
        <BookMarkButton id={id} isBookmarked={bookmarked === "true"} />
        {isHover ? <PlayButton>Play</PlayButton> : null}
      </div>
    );
  }
);

export default ThumbNail;
