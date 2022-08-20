import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import "./cart.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../asset/shopping-bag.svg";

const CartIcon = () => {
  const { isCartDropdown, setisCartDropdown, cartCount } =
    useContext(CartContext);

  const toggleisCartDropdown = () => setisCartDropdown(!isCartDropdown);
  return (
    <div className="cart-icon-container" onClick={toggleisCartDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
