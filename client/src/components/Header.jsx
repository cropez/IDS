import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
      menuTitle: "informacija",
      pageURL: "/informacija"
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
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
            ESSVE
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
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
                display: { xs: "block", md: "block" }
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

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "none" } }}>
            <Button
              variant="lined"
              onClick={() => handleButtonClick("/dati")}
            >
              Dati
            </Button>

            <Button
              variant="lined"
              onClick={() => handleButtonClick("/informacija")}
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


export default Header;