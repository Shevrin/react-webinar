import React, { useCallback, useState } from "react";
import CartRow from "./components/cart-row";
import Cart from "./components/cart";
import List from "./components/list";
import Layout from "./components/layout";

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({ store }) {
  console.log("App");
  const [cartOpened, setCartOpened] = useState(false);

  const cartOpen = () => {
    console.log("--------------///Cart open///---------------");
    setCartOpened(true);
  };

  const cartClose = () => {
    setCartOpened(false);
  };
  const callbacks = {
    // onCreateItem: useCallback(() => store.createItem(), [store]),
    // onSelectItem: useCallback((code) => store.selectItem(code), [store]),
    // onDeleteItem: useCallback((code) => store.deleteItem(code), [store]),
    onAddToCartList: useCallback((code) => store.addToCartList(code), [store]),
    onCartOpen: useCallback(() => cartOpen(), [cartOpened, setCartOpened]),
    onCartClose: useCallback(() => cartClose(), [cartOpened, setCartOpened]),
  };

  return (
    <Layout head={<h1>Интеренет-Магазин</h1>}>
      <CartRow
        items={store.getState().cartList}
        onCartOpen={callbacks.onCartOpen}
      />
      <List
        items={store.getState().items}
        onAddToCartList={callbacks.onAddToCartList}
      />
      {cartOpened ? (
        <Cart
          items={store.getState().cartList}
          onCartClose={callbacks.onCartClose}
        />
      ) : (
        ""
      )}
    </Layout>
  );
}

export default App;
