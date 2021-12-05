import React from "react";
import propTypes from 'prop-types';
import { priceFormatted } from "../../../utils";
import './styles.css';

function CartTotal({items}){
  const totalQuantity = items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  
  return (
    <div className='CartTotal'>
      <div className='CartTotal__title'>Итого</div>
      <div className='CartTotal__price'>
        {priceFormatted(totalPrice)}
      </div>
      <div className='CartTotal__quantity'>
        {totalQuantity} шт
      </div>
    </div>
  )
}

CartTotal.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired
}

CartTotal.defaultProps = {
  items: []
}

export default React.memo(CartTotal);