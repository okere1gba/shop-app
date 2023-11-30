import React from "react";
import "./logolink.css";
import okeresimage from "../../asset/profile picture-1.jpg";
import { Link } from "@mui/material";

function Logolink() {
  return (
    <div>
      <Link className="logo-container" to="/">
        {/* <Crwnlogo className="logo" /> */}
        <img className="image" src={okeresimage} alt="waiting" />
      </Link>
    </div>
  );
}

export default Logolink;
