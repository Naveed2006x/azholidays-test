import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Images/logo.png';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Attractions', path: '/attractions' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  const fontStyle = {
    fontFamily: "'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    fontWeight: 500
  };

  const drawer = (
    <Box
      sx={{
        width: '100%',
        textAlign: 'center',
        paddingTop: '2rem',
        backgroundColor: 'white',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          color: '#333'
        }}
      >
        <CloseIcon />
      </IconButton>
      
      {/* Logo in Drawer */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '2rem',
          cursor: 'pointer'
        }}
        component={Link}
        to="/"
        onClick={handleDrawerToggle}
      >
        <img 
          src={Logo} 
          alt="AZ Holidays" 
          style={{ 
            height: '40px', 
            width: 'auto',
            objectFit: 'contain'
          }}
        />
      </Box>
      
      <List sx={{ marginTop: '1rem' }}>
        {navItems.map((item) => (
          <ListItem 
            key={item.path} 
            disablePadding
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '0.5rem'
            }}
          >
            <ListItemText
              primary={item.label}
              component={Link}
              to={item.path}
              onClick={handleDrawerToggle}
              sx={{
                '& .MuiTypography-root': {
                  ...fontStyle,
                  color: location.pathname === item.path ? '#2c5aa0' : '#333',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'block',
                  '&:hover': {
                    color: '#2c5aa0',
                    backgroundColor: 'rgba(44, 90, 160, 0.1)'
                  }
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{
          background: 'rgba(255, 255, 255, 1)',
          backdropFilter: 'blur(0.5px)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar sx={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Logo */}
          <Box 
            sx={{ 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              flex: 1
            }}
            component={Link}
            to="/"
          >
            <img 
              src={Logo} 
              alt="AZ Holidays" 
              style={{ 
                height: '100px', 
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Box>

          {/* Centered Desktop Navigation */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              gap: '2rem',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 2
            }}
          >
            {navItems.map((item) => (
              <Typography
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  ...fontStyle,
                  color: location.pathname === item.path ? '#2c5aa0' : '#333',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  textDecoration: 'none',
                  '&:hover': {
                    color: '#2c5aa0'
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: location.pathname === item.path ? '100%' : '0',
                    height: '2px',
                    bottom: '-5px',
                    left: '50%',
                    backgroundColor: '#2c5aa0',
                    transition: 'all 0.3s ease',
                    transform: 'translateX(-50%)'
                  },
                  '&:hover::after': {
                    width: '100%'
                  }
                }}
              >
                {item.label}
              </Typography>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              color: '#333'
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: '100%',
            boxShadow: '0 10px 27px rgba(0, 0, 0, 0.05)'
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Add spacing for fixed navbar */}
      <Toolbar />
    </>
  );
};

export default Navbar;