import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Link, Outlet } from "react-router-dom";

function MenuBar() {
  const pages = [
    { text: "Hem", path: "/" },
    { text: "Om oss", path: "/aboutus" },
    { text: "Toast Master", path: "/toastmaster" },
    { text: "Info", path: "/info" },
  ];

  return (
    <AppBar position="static"  
    className="open-sans-aj"
    style={{ background: 'transparent', boxShadow: 'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page, index) => (
                <Link to={page.path} className="link-style" key={index}>
                  {page.text}
                </Link>
              ))}
          
          </Box>
        </Toolbar>
      </Container>
      <Outlet></Outlet>
    </AppBar>
  );
}
export default MenuBar;