import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartIcon from "../../component/cart.icon/cart.icon";
import CartDropdown from "../../component/card-dropdown/cart-dropdown";
import { ReactComponent as Crwnlogo } from "../../asset/crown.svg";
import "./navigation.styles.scss";
import { UserContext } from "../../component/context/context.user";
import { signOutUser } from "../../utills/firebase/firebase.utills";
import { CartContext } from "../../component/context/cart.context";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartDropdown } = useContext(CartContext);
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

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          <Link className="nav-link" to="/shop">
            Explore
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartDropdown && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
