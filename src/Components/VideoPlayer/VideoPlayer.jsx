import React from 'react';

function VideoPlayer({ src }) {
  return (
    <div>
      <video controls width="250">
        <source src={src} type="video/mp4" />
        Tu navegador no admite la etiqueta de video.
      </video>
    </div>
  );
}

export default VideoPlayer;
