import styled from 'styled-components';

const Wrap = styled.footer`
  height: 95px;
  width: 100vw;
  background-color: #181818;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;
const Footer = ()=>{
  return <Wrap>
      <div>Capa do álbum</div>
      <div>
        <div>control</div>
        <div>soundtrack</div>
      </div>
      <div>volume control</div>
  </Wrap>
}
export default Footer;
