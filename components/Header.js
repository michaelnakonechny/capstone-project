import { AppBar, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import MainMenu from './Mainmenu';
import Pblogo from '../public/pblogo.png';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <Head>
        <title>PARKBENCH BAGELS</title>
      </Head>
      <AppBar position="fixed">
        <Toolbar>
          <MainMenu />
          <div>
            <Image width="55px" height="55px" src={Pblogo} alt={Pblogo} />
          </div>

          <Typography variant="h6" color="secondary">
            PARKBENCH BAGELS
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
