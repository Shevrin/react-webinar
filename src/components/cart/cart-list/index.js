import React from "react";
import propTypes from 'prop-types';
import { priceFormatted } from "../../../utils";
import './styles.css';

function CartList({item}){
  return (
    <div className='CartList'>
      <div className='CartList__number'>{item.code}</div>
      <div className='CartList__title'>
        {item.title}
      </div>
      <div className='CartList__price'>
        {priceFormatted(item.price)}
      </div>
      <div className='CartList__quantity'>
        {item.quantity} шт
      </div>
    </div>
  )
}

CartList.propTypes = {
  item: propTypes.object.isRequired
}

export default React.memo(CartList);