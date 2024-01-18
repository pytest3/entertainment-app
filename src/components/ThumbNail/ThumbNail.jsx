import React from "react";
import styles from "./ThumbNail.module.css";
import PlayButton from "../PlayButton";
import BookMarkButton from "../BookMarkButton";

const ThumbNail = React.forwardRef(({ src, className = "", ...rest }, ref) => {
  const [isHover, setIsHover] = React.useState(false);
  const [isBookmarked, setIsBookmarked] = React.useState(false);
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
      <BookMarkButton
        onClick={(e) => {
          setIsBookmarked(!isBookmarked);
          e.stopPropagation();
        }}
        isBookmarked={isBookmarked}
      />
      {isHover ? <PlayButton>Play</PlayButton> : null}
    </div>
  );
});

export default ThumbNail;
