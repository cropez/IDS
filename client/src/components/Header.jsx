import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    navigate(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    navigate(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Dati",
      pageURL: "/dati"
    },
    {
      menuTitle: "Ekonomiskais bloks",
      pageURL: "/block"
    },
    {
      menuTitle: "Profile",
      pageURL: "/profile"
    },
    {
      menuTitle: "Iziet",
      pageURL: "/authorizacija"
    },
  ];

  const onLogout = () => {
    window.localStorage.removeItem('auth')
    console.log('logout')

    navigate('/');
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AccountCircleIcon
            sx={{ display: { xs: "none", md: "flex", fontSize: 40 }, mr: 2 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/dashboard"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            GRĀMATVEDĪBAS SISTĒMA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {menuItems.map((menuItem, i) => {
                const { menuTitle, pageURL } = menuItem;
                return (
                  <MenuItem
                    key={i}
                    onClick={() => handleMenuClick(pageURL)}
                  >
                    {menuTitle}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          <AccountCircleIcon
            sx={{ display: { xs: "flex", flexDirection: "row-reverse", md: "none", fontSize: 40 }, mr: 1 }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="lined"
              onClick={() => handleButtonClick("/dati")}
            >
              Dati
            </Button>

            <Button
              variant="lined"
              onClick={() => handleButtonClick("/block")}
            >
              Ekonomiskais bloks
            </Button>
            <Button
              variant="lined"
              onClick={() => handleButtonClick("/profile")}
            >
              Profile
            </Button>
            <Button
              variant="lined"
              onClick={onLogout}
            >
              Iziet
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default Header