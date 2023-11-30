import "./directory.component.scss";
import { useState } from "react";
import CategoryItem from "../category-item/category.component";
import SiderbarData from "../../store-data/sidebarData";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Toolbar from "@mui/material";
import { purple } from "@mui/material/colors";
import okeresimage from "../../asset/profile picture-1.jpg";
import { signOutUser } from "../../utills/firebase/firebase.utills";
const drawerWidth = 280;
const darwerHight = 70;

const Directory = ({ categories }) => {
  const navigate = useNavigate();

  const [menubar, setmenubar] = useState(true);

  const signOut = () => {
    try {
      signOutUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setmenubar(!menubar);
    }
  };
  return (
    <>
      <div className="directory-container">
        <div className="dashbored_menu">
          <div className="logo">
            <img className="logo_image" src={okeresimage} alt="waiting" />
          </div>
          <h4> Okere's Farm </h4>
          <List className="sideberlist">
            {SiderbarData.map((val, id) => (
              <ListItem
                key={id}
                className="data-row"
                sx={{}}
                onClick={() => navigate(val.link)}
              >
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title} </div>
              </ListItem>
            ))}
          </List>
          <div>
            <span className="nav-link">Settings</span>
            <span className="nav-link" onClick={signOut}>
              LogOut
            </span>
          </div>
        </div>
        <Box
          sx={{
            flexGrow: 1,
            border: "2px solid purple",
            width: `calc(100% - ${drawerWidth}px)`,
            height: `calc(100vh - ${darwerHight}px)`,
            marginTop: `${darwerHight}px`,
          }}
        >
          {/* <Toolbar /> */}
          <Outlet />
        </Box>
      </div>
    </>
  );
};

export default Directory;

// import "./directory.component.scss";
// import CategoryItem from "../category-item/category.component";

// const Directory = ({ categories }) => {
//   return (
//     <div className="directory-container">
//       {categories.map((category) => (
//         <CategoryItem key={category.id} category={category} />
//       ))}
//     </div>
//   );
// };

// export default Directory;
