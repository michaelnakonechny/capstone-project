import Link from 'next/link';
import styled from 'styled-components';

export default function Footer() {
  return (
    <NavFooter>
      <Navbar>
        <Link href="/">
          <NavLink>HOME</NavLink>
        </Link>
        <Link href="/shoppingcart">
          <NavLink>CART</NavLink>
        </Link>
      </Navbar>
    </NavFooter>
  );
}

const NavLink = styled.a`
  color: #fab214;
  cursor: pointer;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const NavFooter = styled.footer`
  background-color: #1b1a1c;
  width: 100%;
  height: 48px;
  color: #fab214;
  font-family: 'lulo-clean', sans-serif;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  margin: 0;
  z-index: 1;
`;
