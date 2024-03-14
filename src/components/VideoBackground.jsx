import React from "react";
import styles from "./VideoBackground.module.css"; // Import CSS module for styling

const VideoBackground = () => {
  return (
    <div className={styles.videoBackground}>
      <video autoPlay loop muted className={styles.video}>
        <source src="/head_vid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
