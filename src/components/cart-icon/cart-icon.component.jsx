import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartActive, setIsCartActive } = useContext(CartDropdownContext);

  const toggle = () => {
    setIsCartActive(!isCartActive);
  };
  return (
    <div className="cart-icon-container" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">10</span>
    </div>
  );
};

export default CartIcon;

// onClickHandler={handleOnClick}
