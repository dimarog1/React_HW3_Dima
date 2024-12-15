import React from 'react';
import { AppBar, Toolbar, Button, IconButton, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface NavbarProps {
    toggleSidebar: () => void;
}

const StyledAppBar = styled(AppBar)(() => ({
    width: '100%',
    margin: 0,
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 1px 11px 0 #2196F3',
}));

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => (
    <StyledAppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <Button color="inherit" href="#">Товары</Button>
            <Button color="inherit" href="#">Склады</Button>
            <Button color="inherit" href="#">О системе</Button>
            <Button color="inherit" href="#">Личная страница</Button>
            <IconButton edge="end" color="inherit" onClick={toggleSidebar}>
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </StyledAppBar>
);

export default Navbar;