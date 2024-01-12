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
import ListItemText from "@mui/material/ListItemText";
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {
  const [openSekme, setOpenSekme] = useState(false);
  const sekmeOptions = [
    {
      text: "AnaSayfa",
      target: "anasayfa",
    },
    {
      text: "Su Tüketimi",
      target: "su-tuketimi",
    },
    {
      text: "Bitki Verileri",
      target: "bitki-verileri",
    },
    {
      text: "Bilgiler",
      target: "bilgiler",
    },
    {
      text: "Makale",
      target: "makale",
    },
    {
      text: "SSS",
      target: "sss",
    },
    {
      text: "Hakkımızda",
      target: "hakkimizda",
    },
    
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {sekmeOptions.map((item) => (
          <Link key={item.text} to={item.target} smooth={true} duration={500}>
            {item.text}
          </Link>
        ))}
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
                <ListItemButton onClick={() => setOpenSekme(false)}>
                  <Link to={item.target} smooth={true} duration={500}>
                    <ListItemText primary={item.text} />
                  </Link>
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
