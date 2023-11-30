import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import "./product-card.styles.scss";
import Button from "../button/button.componet";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

  const { name, price, imgUrl } = product;
  return (
    <div className="product-card-container">
      <div>
        <img src={imgUrl} alt={`${name}`} />
      </div>

      <div className="name">{name}</div>
      <div className="price">{price}</div>

      <div>
        <Button buttonType="logo" onClick={addProductToCart}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
