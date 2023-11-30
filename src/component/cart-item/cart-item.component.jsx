import "./cart-item.styles.scss";

const CartItems = ({ cartItem }) => {
  const { name, imgUrl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imgUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItems;
