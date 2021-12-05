import React from "react";
import propTypes from 'prop-types';
import Controls from "../controls";
import { priceFormatted } from "../../utils";
import plural from 'plural-ru';
import './styles.css';

function CartRow({items, onCartOpen}){
  const isNotEmpty = !!items.length;
  let total = 'пусто';
  if(isNotEmpty) {
    const totalQuantity = items.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    const totalPrice = items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    total = `${plural(totalQuantity, '%d товар', '%d товара', '%d товаров')} / ${priceFormatted(totalPrice)}`;
  }
  return (
    <div className='CartRow'>
      <div className='CartRow__title'>В корзине:</div>
      <div className='CartRow__total'>
        {total}
      </div>
      <div className='CartRow__actions'>
        <Controls onCartOpen={onCartOpen} />
      </div>
    </div>
  )
}

CartRow.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired
}

CartRow.defaultProps = {
  items: []
}

export default React.memo(CartRow);