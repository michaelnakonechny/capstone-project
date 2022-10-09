import Header from './Header';
import Footer from './Footer';
import BasicMenu from './menu';
import { BurgerMenuStyle } from './menu';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <BasicMenu style={BurgerMenuStyle} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Layout;
