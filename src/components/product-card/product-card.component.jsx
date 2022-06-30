import { useContext } from 'react';
import { CartContext } from '../../contexts/cart-context';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({product}) => {

  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className='product-card-container'>
      
      <img src={imageUrl} alt={`${name}`} />
      
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>

      <Button onClick={addProductToCart} type="button" buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>                                

    </div>

  )
};

export default ProductCard;