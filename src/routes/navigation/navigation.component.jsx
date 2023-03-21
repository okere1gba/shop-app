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
      <div className="navigation">
        <Link className="logo-container " to="/">
          <Crwnlogo className="logo" />
        </Link>

        <div className="nav" id={menubar ? "nav-link-visablity" : ""}>
          {currentUser ? (
            <div className="nav-links-container">
              <Link className="nav-link" onClick={restore_NAV} to="/home">
                SHOP
              </Link>

              <Link className="nav-link" onClick={restore_NAV} to="/shop">
                Explore
              </Link>
              {currentUser ? (
                <span className="nav-link" onClick={signOut}>
                  Sign Out
                </span>
              ) : (
                <Link className="nav-link" onClick={restore_NAV} to="/auth">
                  SIGN IN
                </Link>
              )}
              <CartIcon />
            </div>
          ) : (
            <div className="nav-links-container">
              <Link className="nav-link" onClick={restore_NAV} to="/shop">
                See Designs
              </Link>
              <Link className="nav-link" onClick={restore_NAV} to="/login">
                Login
              </Link>

              <Link className="nav-link" onClick={restore_NAV} to="/signup">
                Register
              </Link>

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
              <ClearIcon onClick={changeaction} />
            </div>
          ) : (
            <ClearAllIcon onClick={changeaction} />
          )}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
