import React from "react";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
// import { signOutUser } from "../../utills/firebase/firebase.utills";
import { useNavigate } from "react-router-dom";

// const SignOut = () => {
//   const [menubar, setmenubar] = useState(true);
//   const navigate = useNavigate();
//   try {
//     signOutUser();

//     navigate("/");
//   } catch (error) {
//     console.log(error);
//   } finally {
//     setmenubar(!menubar);
//   }
// };

const SiderbarData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/home/dashboard",
    id: 1,
  },

  {
    title: "Connect",
    icon: <AppRegistrationIcon />,
    link: "/Connect",
    id: 2,
  },
  {
    title: "Product List",
    icon: <HowToRegIcon />,
    link: "/Product",
    id: 3,
  },

  {
    title: "Bookings",
    icon: <InfoIcon />,
    link: "/Bookings",
    id: 4,
  },

  {
    title: "Confirmation",
    icon: <CallIcon />,
    link: "/Confirmation",
    id: 5,
  },

  // {
  //   title: "Settings",
  //   icon: <SettingsIcon />,
  //   link: "/Confirmation",
  //   id: 5,
  // },
  // {
  //   title: "Logout",
  //   icon: <LogoutIcon />,
  //   link: "",
  //   id: 5,
  // },
];

export default SiderbarData;
