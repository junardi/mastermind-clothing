import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

const CartIcon = () => {
  
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const testFunc = () => {
    console.log("Test function");
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon'></ShoppingIcon>
      <span className="item-count">{cartCount}</span>
    </div>
  )
};

export default CartIcon;
