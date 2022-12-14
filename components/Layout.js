import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const Main = styled.main`
  height: 100%;
  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
