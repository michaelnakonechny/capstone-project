import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={BurgerMenuStyle}>
      <Button
        style={ButtonStyle}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href="/about">
          <MenuItem style={MenuItemStyle} onClick={handleClose}>
            ABOUT
          </MenuItem>
        </Link>

        <MenuItem style={MenuItemStyle} onClick={handleClose}>
          MY ACCOUNT
        </MenuItem>
        <MenuItem style={MenuItemStyle} onClick={handleClose}>
          LOGOUT
        </MenuItem>
      </Menu>
    </div>
  );
}

const BurgerMenuStyle = {
  position: 'absolute',
  top: '1rem',
  left: '1rem',
};

const ButtonStyle = {
  color: '#fab214',
  fontFamily: 'lulo-clean, sans-serif',
};

const MenuItemStyle = {
  backgroundColor: '#1b1a1c',
  textDecoration: 'none',
  color: '#fab214',
};

const MenuStyle = {
  backgroundColor: '#1b1a1c',
};
