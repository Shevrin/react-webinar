import React from "react";
import propTypes from "prop-types";
import Item from "../item";
import "./styles.css";

function List({ items, onAddToCartList }) {
  console.log("List");
  return (
    <div className="List">
      {items.map((item) => (
        <div className="List__item" key={item.code}>
          <Item item={item} onAddToCart={onAddToCartList} />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  onAddToCartList: propTypes.func,
};

List.defaultProps = {
  items: [],
  onAddToCartList: () => {},
};

export default React.memo(List);
