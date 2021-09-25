import styled from 'styled-components';
import Verified from '../icons/Verified';

const Wrap = styled.header`
  position: relative;
  height: 435px;

  h1 {
    margin: 0;
    font-size: 96px;
  }
  .icon-verified {
    display: flex;
    align-items: center;
    font-size: 15px;
    svg {
      margin-right: 5px;
    }
  }
  small {
    font-size: 16px;
  }
`;

const Linear = styled.div`
  position: absolute;
  bottom: 0;
  height: 50%;
  width: 100%;
  background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 2;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 435px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 38px 26px;
`;

const Bg = styled.div`
  position: absolute;
  background-image: url('/cover.jpg');
  background-size: cover;
  background-position: center center;
  opacity: 0.8;
  width: 100%;
  height: 435px;
  z-index: 1;
`;

const Header = () => {
  return (
    <Wrap>
      <Content>
        <div className="icon-verified">
          <Verified />
          Artista verificado
        </div>
        <h1>The Beatles</h1>
        <small>25.596.165 ouvintes mensais</small>
      </Content>
      <Linear />
      <Bg />
    </Wrap>
  );
};

export default Header;
