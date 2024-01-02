/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


const Navbar = () => {
  const [openSekme, setOpenSekme] = useState(false);
  const sekmeOptions = [
    {
      text: "AnaSayfa",
      
    },
    {
      text: "Bitki Verileri ",
      
    },
    {
      text: "Su Tüketimi",
     
    },

    {
      text: "Bilgiler",
    },

    {
      text: "Makale",
    },
    {
      text: "Hakkımızda",
      
    },
    {
      text: "SSS",
      
    },

  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Ana Sayfa</a>
        <a href="">Bitki Verileri</a>
        <a href="">Su Tüketimi</a>
        <a href="">Bilgiler</a>
        <a href="">Makale</a>
        <a href="">Hakkımızda</a>
        <a href="">SSS</a>        
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenSekme(true)} />
      </div>
      <Drawer open={openSekme} onClose={() => setOpenSekme(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenSekme(false)}
          onKeyDown={() => setOpenSekme(false)}
        >
          <List>
            {sekmeOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  
  );
};

export default Navbar;
