import styled from 'styled-components';
import Search from './../components/Search';

const AppContainer = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  padding-top: 20px;
`

function Home() {
  return (
    <AppContainer>
        <Search />
    </AppContainer>
  );
}

export default Home;
