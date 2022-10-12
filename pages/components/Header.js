import { AppBar, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import MainMenu from './Mainmenu';

export default function Header() {
  return (
    <>
      <Head>
        <title>PARKBENCH BAGELS</title>
      </Head>
      <AppBar position="fixed">
        <Toolbar>
          <MainMenu />
          <Typography variant="h6" color="secondary">
            PARKBENCH BAGELS
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
