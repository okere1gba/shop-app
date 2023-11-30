import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext, useState } from "react";
import CartIcon from "../../component/cart.icon/cart.icon";
import CartDropdown from "../../component/card-dropdown/cart-dropdown";
import { ReactComponent as Crwnlogo } from "../../asset/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../component/context/context.user";
import { signOutUser } from "../../utills/firebase/firebase.utills";
import { CartContext } from "../../component/context/cart.context";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import okeresimage from "../../asset/profile picture-1.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logolink from "../../component/logolink component/logolink";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartDropdown } = useContext(CartContext);
  const [menubar, setmenubar] = useState(true);

  const gotosigninPage = useNavigate();

  const signOut = () => {
    try {
      signOutUser();
      gotosigninPage("/");
    } catch (error) {
      console.log(error);
    } finally {
      setmenubar(!menubar);
    }
  };

  const restore_NAV = () => {
    setmenubar(!menubar);
  };

  const changeaction = () => setmenubar(!menubar);
  //console.log(currentUser);
  //const signOutHandler = async () => {
  //   await signOutUser();
  //setCurrentUser(null);

  //  };
  return (
    <Fragment>
      <div className={currentUser ? "navigation2" : "navigation"}>
        <div>
          {currentUser ? (
            ""
          ) : (
            <Link className="logo-container " to="/">
              {/* <Crwnlogo className="logo" /> */}
              <img className="image" src={okeresimage} alt="waiting" />
            </Link>
          )}
        </div>
        <div id="nav" className={menubar ? "#nav active" : "#nav"}>
          {currentUser ? (
            <div id="nav-links-container">
              {/* <Link className="nav-link" onClick={restore_NAV} to="/dashboard">
                Dashboard
              </Link>

              <Link
                className="nav-link"
                onClick={restore_NAV}
                to="/productupload"
              >
                Upload
              </Link> */}
              {/* {currentUser ? (
                <span className="nav-link" onClick={signOut}>
                  Sign Out
                </span>
              ) : (
                <Link className="nav-link" onClick={restore_NAV} to="/auth">
                  SIGN IN
                </Link>
              )} */}

              <AccountCircleIcon sx={{ height: "50px", width: "50px" }} />
            </div>
          ) : (
            <div id="nav-links-container">
              <Link
                className="nav-link"
                onClick={restore_NAV}
                to="products/sections"
              >
                Products
              </Link>
              <Link className="nav-link" onClick={restore_NAV} to="/about">
                Abouts
              </Link>
              <Link className="nav-link" onClick={restore_NAV} to="/contact">
                Contacts
              </Link>
              <Link className="nav-link" onClick={restore_NAV} to="/upload">
                Upload
              </Link>
              <Link className="nav-link" onClick={restore_NAV} to="/login">
                Login
              </Link>
              <Link className="nav-link" onClick={restore_NAV} to="/signup">
                Register
              </Link>
              <CartIcon />
              {/* <div className="linkers">
              <a href="/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </div> */}
            </div>
          )}

          {isCartDropdown && <CartDropdown className="cartdisplayforscreens" />}
        </div>

        <div className="menuIcon">
          {menubar ? (
            <div>
              <ClearIcon sx={{ fontSize: "35px" }} onClick={changeaction} />
            </div>
          ) : (
            <ClearAllIcon sx={{ fontSize: "35px" }} onClick={changeaction} />
          )}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
