import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart.context";

import "./card-dropdown.scss";
import Button from "../button/button.componet";
import CartItems from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const gotoChackoutPage = () => {
    navigate("/chackout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={gotoChackoutPage}>Chackout</Button>
    </div>
  );
};

export default CartDropdown;
