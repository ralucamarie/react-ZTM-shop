import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <span className="name">{name}</span>

      <div className="quantity">
        <span onClick={() => removeItemFromCart(cartItem)}>
          <i className="fa-solid fa-chevron-left arrow"></i>
        </span>
        <span> {quantity} </span>
        <span onClick={() => addItemToCart(cartItem)}>
          <i className="fa-solid fa-chevron-right arrow"></i>
        </span>
      </div>

      <div className="price">${price}</div>
      <div
        onClick={() =>
          // const removedItem={...cartItem, }
          removeItemFromCart({ ...cartItem, quantity: 1 })
        }
      >
        <i className="fa-solid fa-x remove-button"></i>
      </div>
    </div>
  );
};

export default CheckoutItem;
