import Head from 'next/head';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Menu from './menu';

export default function Header() {
  return (
    <>
      <Head>
        <title>PARKBENCH BAGELS</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Menu />
          <Typography variant="h6" color="secondary">
            PARKBENCH BAGELS
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
