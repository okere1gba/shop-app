import React from "react";
import "./dashbored.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import InventoryIcon from "@mui/icons-material/Inventory";
import { colors } from "@mui/material";
import { green } from "@mui/material/colors";

const CardData = [
  {
    title: "Total orders",
    link: "/home/dashboard",
    icon: <AddShoppingCartIcon sx={{ height: "50px", width: "50px" }} />,
    id: 1,
  },

  {
    title: "Available product",
    link: "/Connect",
    icon: (
      <AccountBalanceWalletIcon
        sx={{ height: "50px", width: "50px", color: "green" }}
      />
    ),
    id: 2,
  },
  {
    title: "Purchase order",
    link: "/Product",
    icon: <InventoryIcon sx={{ height: "50px", width: "50px" }} />,
    id: 3,
  },
];

const Login_dashboard = () => {
  //  <List className="sideberlist">
  //    {SiderbarData.map((val, id) => (
  //      <ListItem
  //        key={id}
  //        className="data-row"
  //        sx={{}}
  //        onClick={() => navigate(val.link)}
  //      >
  //        <div id="icon">{val.icon}</div>
  //        <div id="title">{val.title} </div>
  //      </ListItem>
  //    ))}
  //  </List>;
  return (
    <div>
      <div className="price_card">
        {/* <Tables /> */}

        {CardData.map((val, id) => (
          <Card key={id} className="card_addjustment">
            <CardContent
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <Typography gutterBottom variant="h5" component="div">
                  {val.title}
                </Typography>
              </div>
              <div className=" icon_param">{val.icon}</div>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Login_dashboard;
