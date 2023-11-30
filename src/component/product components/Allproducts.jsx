import React from "react";
import { useContext, Fragment, useState, useEffect } from "react";
import { Box } from "@mui/material";
import "./allproducts.css";
import { db } from "../../utills/firebase/firebase.utills";
import { doc, collection, getDocs } from "firebase/firestore";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CardActions from "@mui/material/CardActions";
import Button from "../button/button.componet";
import { CartContext } from "../context/cart.context";
import ProductCard from "../product-card/product-card.component";

const info = [
  "export products",

  "furit",

  "grain products",

  "packaged products",

  "palm oil",

  "seed products",

  "tuber",
];

function Allproducts() {
  const { addItemToCart } = useContext(CartContext);
  const [Allproducts, setAllproducts] = useState();
  const [loading, setloading] = useState(false);

  const getCollections = async () => {
    let outputValue = [];
    for (const element of info) {
      const val = doc(db, "Farm Products", element);
      const collectionval = collection(val, "Product list");
      const data = await getDocs(collectionval);

      const result = data.docs.map((output) => ({
        ...output.data(),
        id: output.id,
      }));
      outputValue.push(result);
    }
    setAllproducts(outputValue);
    setloading(true);
  };
  //   console.log(Allproducts);

  useEffect(() => {
    getCollections();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="displayaFormat">
          {/* <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          > */}
          {Allproducts &&
            Allproducts.map((innerArray) => {
              return innerArray.map((info) => {
                return (
                  <ProductCard product={info} />

                  // <Grid xs={2} sm={4} md={4}>
                  //   <Card sx={{ maxWidth: 345 }}>
                  //     <CardActionArea>
                  //       <CardMedia
                  //         component="img"
                  //         height="140"
                  //         image={info.imgUrl}
                  //         alt="green iguana"
                  //       />
                  //       <CardContent>
                  //         <Typography
                  //           gutterBottom
                  //           variant="h5"
                  //           component="div"
                  //         >
                  //           {info.Name}
                  //         </Typography>
                  //         <Typography variant="body2" color="text.secondary">
                  //           {info.Description}
                  //         </Typography>
                  //       </CardContent>

                  //       <CardActions>
                  //         <Button onClick={addItemToCart}>Add to Cart</Button>
                  //       </CardActions>
                  //     </CardActionArea>
                  //   </Card>
                  // </Grid>
                );
              });
            })}
          {/* </Grid> */}
        </div>
      ) : (
        <Box sx={{ pt: 0.5, display: "flex", justifyContent: "space-around" }}>
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Box>
      )}
    </div>
  );
}

export default Allproducts;
