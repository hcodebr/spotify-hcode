import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  section {
    flex: 1;
    display: flex;
    article {
      flex: 1;
      display: flex;
      flex-direction: column;
      background: linear-gradient(
        180deg,
        #212121 0%,
        #212121 44.64%,
        #121212 73.77%
      );
      main {
        flex: 1;
      }
    }
  }
`;

export default Page;
