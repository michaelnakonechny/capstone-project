import Header from './Header';
import Footer from './Footer';
import BasicMenu from './menu';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <BasicMenu />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
