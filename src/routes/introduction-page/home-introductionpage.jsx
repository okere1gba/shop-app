import React from "react";
import "./introductionpage.scss";
import image from "../../asset/oil palm (2).jpg";
import image2 from "../../asset/20liters2.jpg";
import image3 from "../../asset/10liters2.jpg";
import image4 from "../../asset/5liter.jpg";
import { useNavigate } from "react-router-dom";
// import Tables from "../../component/tables/table";
// import { uploadDataToDatabase } from "../../utills/firebase/firebase.utills";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// import { sending } from "../../utills/test.utils";

const HomeIntroductionPage = () => {
  const gotosigninPage = useNavigate();
  //  const dataValues = {
  //   name: "Los Angeles",
  //   state: "CA",
  //   country: "USA"
  //  }

  return (
    <>
      <div className="flex">
        <div className="wrapper1">
          <div className="intro1">
            <span className="hello1">Wellcome</span>
            <h1 className="introtext1">
              To <span className="insidestyles1">Okere's Farm</span>
            </h1>
            <p className="paragraph">
              We offer you the best quality oil you can find, with no
              addictives.Please checkout our products section,if you would like
              to trade with us. And you can also register with us to see our
              other services that can be of benefit to you, using the link
              below.
            </p>
          </div>

          <div className="bttn1">
            <button
              // gotosigninPage("/login")
              onClick={() => ""}
              className="buttons1"
            >
              Register
            </button>
            <button className="buttons1">Signup</button>
          </div>
        </div>

        <div className="imagebox">
          <img className="images" src={image} alt="" />
        </div>
      </div>

      <div className="heading">
        <Typography variant="h4" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </div>

      <div className="price_card">
        {/* <Tables /> */}

        <Card className="card_addjustment">
          <CardMedia sx={{ height: 140 }} image={image2} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              20 liters of Oil
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card className="card_addjustment">
          {/* <img className="card_images2" src={image3} alt="" /> */}
          {/* <CardMedia
            sx={{ height: 140, objectFit: "contain" }}
            image={image2}
            title="green iguana"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              10 liters of Oil
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

        <Card className="card_addjustment">
          {/* <img className="card_images2" src={image4} alt="" /> */}
          {/* <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              5 Liters oil
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default HomeIntroductionPage;
