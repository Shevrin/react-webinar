import React from "react";
import "./style.css";

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */

function App({ store }) {
  function selectItemOnClick(item) {
    store.selectItem(item.code);
    store.countSelectItem(item.code);
  }
  return (
    <div className="App">
      <div className="App__head">
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className="Controls">
        <button onClick={() => store.createItem()}> Добавить</button>
      </div>
      <div className="App__center">
        <div className="List">
          {store.getState().items.map((item) => (
            <div
              key={item.code}
              className={
                "List__item" + (item.selected ? " List__item_selected" : "")
              }
            >
              <div className="Item" onClick={() => selectItemOnClick(item)}>
                <div className="Item__number">{item.code}</div>
                <div className="Item__title">
                  {item.title}
                  <span className={!item.count ? "Item__span" : ""}>
                    {" "}
                    | Выделялся {item.count} раз
                  </span>
                </div>
                <div className="Item__actions">
                  <button onClick={() => store.deleteItem(item.code)}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
