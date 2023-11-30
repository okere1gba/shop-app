import React from "react";
import "./productnav.css";
import CartIcon from "../cart.icon/cart.icon";
import CartDropdown from "../card-dropdown/cart-dropdown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "../button/button.componet";
import Logolink from "../logolink component/logolink";
import { Fragment, useContext, useState } from "react";
import { CartContext } from "../context/cart.context";

function ProductNav() {
  const { isCartDropdown } = useContext(CartContext);
  return (
    <Box className="nav-box">
      <Logolink />

      <div className="nav-container">
        <TextField
          sx={{ width: 400 }}
          className="textField"
          id="outlined-basic"
          label="Enter Product"
          variant="outlined"
          name="Search"
        />
        <Button className="buttonlength">Search</Button>
      </div>

      <div className="profile-container">
        <FavoriteBorderIcon className="profile-icons" />
        <span>Favourites </span>
        <PersonOutlineIcon className="profile-icons" />
        <span> Account</span>
        <CartIcon />

        <span> Carts</span>
      </div>
      {isCartDropdown && <CartDropdown className="cartdisplayforscreens" />}
    </Box>
  );
}

export default ProductNav;
