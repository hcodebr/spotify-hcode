import styled from 'styled-components';
import LogoSpotify from '../images/LogoSpotify';
import MenuItem from './MenuItem';
const Wrap = styled.nav`
  width: 240px;
  background-color: #000;
  display: flex;
  flex-direction: column;
`;

const NavPanel = () => {
  return  <Wrap>
      <LogoSpotify />
      <MenuItem />
  </Wrap>
};

export default NavPanel;
