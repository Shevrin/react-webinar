import React from "react";
import propTypes from "prop-types";
import { priceFormatted } from "../../utils";
import "./styles.css";

function Item({ item, onAddToCart }) {
  console.log("Item", item.title);

  return (
    <div className="Item">
      <div className="Item__number">{item.code}</div>
      <div className="Item__title">{item.title}</div>
      <div className="Item__price">{priceFormatted(item.price)}</div>
      <div className="Item__actions">
        <button
          onClick={() => {
            onAddToCart(item.code);
            console.log("click");
          }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  onAddToCart: propTypes.func.isRequired,
};

Item.defaultProps = {
  onSelect: () => {},
  onDeleted: () => {},
};

export default React.memo(Item);
