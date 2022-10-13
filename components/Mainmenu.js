import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useState } from 'react';

export default function MainMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        style={ButtonStyle}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        color="primary"
      >
        <Link href="/about">
          <MenuItem style={MenuItemStyle} onClick={handleClose}>
            ABOUT
          </MenuItem>
        </Link>
        <Link href="/account">
          <MenuItem style={MenuItemStyle} onClick={handleClose}>
            MY ACCOUNT
          </MenuItem>
        </Link>
        <MenuItem style={MenuItemStyle} onClick={handleClose}>
          LOGOUT
        </MenuItem>
      </Menu>
    </>
  );
}

const ButtonStyle = {
  color: '#fab214',
};

const MenuItemStyle = {
  textDecoration: 'none',
  color: '#fab214',
};
