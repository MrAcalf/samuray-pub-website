import React from 'react';

import { Player } from './styles';

const VideoPlayer: React.FC = () => (
  <Player
    url="/assets/videos/institucional.mp4"
    width="100%"
    height="100%"
    controls
  />
);

export default VideoPlayer;
