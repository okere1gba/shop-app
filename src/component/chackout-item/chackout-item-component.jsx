import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import "./chackout.styles.scss";

const CheckoutItems = ({ cartItem }) => {
  const { name, imgUrl, price, quantity } = cartItem;

  const { clearItemFromCart, addItemToCart, removeFromCart } =
    useContext(CartContext);

  const clearHandler = () => clearItemFromCart(cartItem);
  const addHandler = () => addItemToCart(cartItem);
  const removeHandler = () => removeFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imgUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>

        <div className="arrow" onClick={addHandler}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItems;
