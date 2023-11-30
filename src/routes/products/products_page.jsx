import { useContext, Fragment, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import ProductCard from "../../component/product-card/product-card.component";
import { CategoriesContext } from "../../component/context/categories.context";
import "./products_page.css";
import okeresimage from "../../asset/profile picture-1.jpg";
import image1 from "../../asset/furits.jpeg";
import image2 from "../../asset/gallon 2 (2).jpg";
import image3 from "../../asset/melons seeds2.jpg";
import image4 from "../../asset/vegetables 1.jpg";
import image5 from "../../asset/yams.jpg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
// import ProductsData from "../../store-data/productsData";
import ProductNav from "../../component/product nav/ProductNav";
import SidebarCategory from "../../component/product sidebar page/sidebar-category";
import Button from "../../component/button/button.componet";
import { db } from "../../utills/firebase/firebase.utills";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  addDoc,
  updateDoc,
  getDocFromCache,
  arrayUnion,
} from "firebase/firestore";

const ProductsData = [
  {
    title: "All Category",
    Image: "../../asset/gallon 2 (2).jpg",
    // icon: <HomeIcon />,
    link: "/products/sections",
    id: 1,
  },
  {
    title: "Palm Oil",
    Image: "../../asset/gallon 2 (2).jpg",
    // icon: <HomeIcon />,
    link: "/home/dashboard",
    id: 1,
  },

  {
    title: "Malon seed",
    Image: "../../asset/melons seeds2.jpg",
    // icon: <AppRegistrationIcon />,
    link: "/Connect",
    id: 2,
  },
  {
    title: "Furits",

    Image: "../../asset/furits.jpeg",
    // icon: <HowToRegIcon />,
    link: "/Product",
    id: 3,
  },

  {
    title: "Tubers",
    Image: "../../asset/yams.jpg",
    // icon: <InfoIcon />,
    link: "/Bookings",
    id: 4,
  },

  {
    title: "Vegetables",
    Image: "../../asset/profile picture-1.jpg",
    // icon: <CallIcon />,
    Image: "",
    link: "/Confirmation",
    id: 5,
  },
];

// all the category
const info = [
  "export products",

  "furit",

  "grain products",

  "packaged products",

  "palm oil",

  "seed products",

  "tuber",
];

const drawerWidth = 280;
const darwerHight = 70;
// const Products = () => {
//   // let { categoryMap } = useContext(CategoriesContext);
//   // // console.log("object:::", categoryMap);
//   // // console.log("keys:::", Object.keys(categoryMap));

//   // function selectOnlyArrays(storedataObjects) {
//   //   // const knownArrays = ['jackets', 'mens']
//   //   return {
//   //     Mens: storedataObjects.mens,
//   //     Jackets: storedataObjects.jackets,
//   //     Sneakers: storedataObjects.sneakers,
//   //     Womens: storedataObjects.womens,
//   //   };
//   //   console.log("first log:::", array_of_keys);
//   //   let first_key = array_of_keys.mens;
//   //   console.log("hear:::", first_key);
//   //   for (let i = 7; i < array_of_keys.length; i++) {
//   //     if (Array.isArray(array_of_keys[i])) first_key = array_of_keys[i];
//   //   }
//   //   return first_key;
//   // }

//   // if (Object.keys(categoryMap).length === 0) return <>laoding...</>;

//   // const newCategoryMap = selectOnlyArrays(categoryMap);

//   // return (
//   //   <Fragment>
//   //     {ProductsData.map((title) => (
//   //       <div key={title}>
//   //         <h2>{title}</h2>
//   //       </div>
//   //     ))}
//   //   </Fragment>
//   // );

//   return (
//     <>
//       <div className="products-container">
//         {ProductsData.map((id, val) => {
//           <div key={id}>
//             <h2>{val.title}</h2>
//           </div>;
//         })}
//       </div>
//     </>
//   );
// };

// export default Products;

const MyProducts = () => {
  const [Allproducts, setAllproducts] = useState();

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
  };
  console.log(Allproducts);

  // useEffect(() => {
  //   getCollections();
  // }, []);
  return (
    <>
      <ProductNav />
      <SidebarCategory />
      <div className="productsContainer">
        {ProductsData.map((val) => {
          return (
            <Link className="button-category" to={val.link}>
              {val.title}
            </Link>
          );
        })}
      </div>
      <div>
        {/* {Allproducts &&
          Allproducts.map((innerArray) => {
            return innerArray
              .filter((data) => data.Name === "Packaged Products")
              .map((info) => {
                return <h1>{info.Name}</h1>;
              });
          })} */}
      </div>
      <Box className="page-body">
        <Outlet />
      </Box>
    </>
  );
};
export default MyProducts;
