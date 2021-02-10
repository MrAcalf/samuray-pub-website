import ReactPlayer from 'react-player';
import styled from 'styled-components';

export const Player = styled(ReactPlayer)`
  .player-wrapper {
    position: relative;
    padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
