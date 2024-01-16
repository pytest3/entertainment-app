import React from "react";
import styles from "./ThumbNail.module.css";
import PlayButton from "../PlayButton";
import BookMarkButton from "../BookMarkButton";

const ThumbNail = React.forwardRef(({ src, className = "", ...rest }, ref) => {
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
        backgroundImage: isHover
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${src})`
          : `url(${src})`,
      }}
    >
      <BookMarkButton />
      {isHover ? <PlayButton>Play</PlayButton> : null}
    </div>
  );
});

export default ThumbNail;
