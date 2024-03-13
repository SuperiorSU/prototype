// components/VideoBackground.js
import React from 'react';

const VideoBackground = ({  }) => {
  return (
    <div className="video-background">
      <video autoPlay src={require('../assets/head_vid.mp4')} loop muted playsInline/>
      
      <style jsx>{`
        .video-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
        }
        video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default VideoBackground;