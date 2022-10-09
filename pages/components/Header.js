import Head from 'next/head';
import styled from 'styled-components';

export default function Header() {
  return (
    <>
      <Head>
        <title>PARKBENCH BAGELS</title>
      </Head>
      <Heading>
        <h1>PARKBENCH BAGELS</h1>
      </Heading>
    </>
  );
}

const Heading = styled.header`
  background-color: #1b1a1c;
  width: 100%;
  height: 48px;
  color: #fab214;
  font-family: 'lulo-clean', sans-serif;
  font-weight: bold;
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  margin: 0;
  margin-bottom: 3rem;
  z-index: 1;
`;
