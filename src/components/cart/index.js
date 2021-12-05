import React from "react";
import propTypes from "prop-types";
import CartList from "./cart-list";
import CartTotal from "./cart-total";
import "./styles.css";

function Cart({ items, onCartClose }) {
  const isNotEmpty = !!items.length;

  return (
    <div className="Cart">
      <div className="Cart__backdrop"></div>
      <div className="Cart__content">
        <div className="Cart__head">
          <h1 className="Cart__title">Корзина</h1>
          <button className="Cart__button" onClick={onCartClose}>
            Закрыть
          </button>
        </div>
        {isNotEmpty ? (
          <div className="Cart__center">
            <div className="Cart__list">
              {items.map((item) => (
                <div className="Cart__item" key={item.code}>
                  <CartList item={item} />
                </div>
              ))}
            </div>
            <div className="Cart__total">
              <CartTotal items={items} />
            </div>
          </div>
        ) : (
          <div className="Cart__empty">Пусто</div>
        )}
      </div>
    </div>
  );
}

Cart.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
};

Cart.defaultProps = {
  items: [],
};

export default React.memo(Cart);
