/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo1.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import HealingIcon from '@mui/icons-material/Healing';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import MedicationIcon from '@mui/icons-material/Medication';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Services",
      icon: <MedicalServicesIcon />,
    },
    {
      text: "Doctors",
      icon: <MedicationIcon />,
    },
    {
      text: "Emergency",
      icon: <HealingIcon />,
    },
    {
      text: "Contact Us",
      icon: <PhoneRoundedIcon />,
    },

    ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt=""  className="Logo"/>
      </div>
      <div className="navbar-links-container">
        <a href="">Home <span className="a-Href"></span></a>
        <a href="/">Services</a>
        <a href="">Doctors</a>
        <a href="">Emergency</a>
        <a href="">Contact Us</a>
        <button className="primary-button-sIN">Sign in</button>
        <button className="primary-button-sUP">Sign up</button>

      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
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