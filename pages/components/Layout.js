import Header from './Header';
import Footer from './Footer';
import BasicMenu from './menu';
import styled from 'styled-components';

const Main = styled.main`
  height: 100%;
  width: 100%;
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
