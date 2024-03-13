// components/VideoBackground.js
import React from 'react';

const VideoBackground = ({  }) => {
  return (
    <div className="video-background">
      <video autoPlay src={require('../assets/head_vid.mp4')} loop muted playsInline/>
      
      
    </div>
  );
};

export default VideoBackground;