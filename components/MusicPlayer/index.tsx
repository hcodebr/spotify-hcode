import styled from "styled-components";
import Forward from '../icons/Forward';
import Pause from '../icons/Pause';
import Previous from '../icons/Previous';
import Random from '../icons/Random';
import Repeat from '../icons/Repeat';

const Wrap = styled.div`
    width: 692px;
    display: flex;
    flex-direction: column;
    .music-player {
        display: flex;
        flex-direction: column;
        align-items: center;
        .player-controls {
            display: flex;
            align-items: center;
            .controls {
                display: flex;
                align-items: center;
                margin: 0 29px;
                .pause {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #535353;
                    margin: 0 30px;
                }
            }
        }
    }    
    .player-duration {
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 17px;
      > div {
        margin: 0 8px;
        width: 100%;
        height: 4px;
        background-color: #535353;
      }
    }
`;

export default () => {

    return (
        <Wrap>
            <div className="music-player">
                <div className="player-controls">
                    <Random />
                    <div className="controls">
                        <Previous />
                        <div className="pause">
                            <Pause />
                        </div>
                        <Forward />
                    </div>
                    <Repeat />
                </div>
                <div className="player-duration">
                  <span>0:00</span>
                    <div></div>
                    <span>0:00</span>
                </div>
            </div>
        </Wrap>
    )

}