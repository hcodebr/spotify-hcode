import styled from 'styled-components';
import Devices from '../icons/Devices';
import Heart from '../icons/Heart';
import Microphone from '../icons/Microphone';
import MultiScreen from '../icons/MultiScreen';
import Playlist from '../icons/Playlist';
import Volume from '../icons/Volume';
import MusicPlayer from '../MusicPlayer';

const Wrap = styled.footer`
  height: 95px;
  width: 100vw;
  background-color: #181818;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 31px;
  .music-info {
    display: flex;
    align-items: center;
    height: 56px;
    .music {
      h4 {
        margin: 0;
      }
    }
    .icons {
      > svg + svg {
        margin-left: 20px;
      }
    }
    > div {
      margin-left: 20px;
    }
  }
  .music-volume {
    display: flex;
    align-items: center;
    > svg + svg {
      margin-left: 15px;
    }
    .volume {
      margin-left: 10px;
      height: 4px;
      width: 93px;
      border-radius: 10px;
      background-color: #B3B3B3;
    }
  }
`;

export default () => {

  return (
    <Wrap>
      <div className="music-info">
        <img src="/music.jpg" alt="Penny Lane" />
        <div className="music">
          <h4>Penny Lane - Stereo Mix 2017</h4>
          <small>The Beatles</small>
        </div>
        <div className="icons">
          <Heart />
          <MultiScreen />
        </div>
      </div>
      <MusicPlayer />
      <div className="music-volume">
        <Microphone />
        <Playlist />
        <Devices />
        <Volume />
        <div className="volume"></div>
      </div>
    </Wrap>
  )

};
