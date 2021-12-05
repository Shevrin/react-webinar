class Store {
  constructor(initState) {
    // Состояние приложения (данные)
    this.state = initState;
    // Подписчики на изменение state
    this.listners = [];
    // Корзина
    this.cartList = [];
  }

  /**
   * Подписка на изменение state
   * @param callback {Function}
   */
  subscribe(callback) {
    this.listners.push(callback);
    // Возвращаем функцию для отписки
    return () => {
      this.listners = this.listners.filter((item) => item !== callback);
    };
  }

  /**
   * Выбор state
   * @return {*}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка state
   * @param newState {*}
   */
  setState(newState) {
    this.state = newState;
    // Оповещаем всех подписчиков об изменении стейта
    for (const lister of this.listners) {
      lister(this.state);
    }
  }

  // Действия приложения.
  // @todo
  // Нужно вынести в отдельный слой, так как Store не определяет конкретную структуру состояния.
  // Может быть как модуль (расширение) для Store

  /**
   * Создание записи
   */
  createItem() {
    const code = Math.max(0, ...this.state.items.map((item) => item.code)) + 1;
    this.setState({
      items: this.state.items.concat({
        code,
        title: "Новая запись №" + code,
      }),
    });
  }

  /**
   * Удаление записи по её коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      items: this.state.items.filter((item) => item.code !== code),
    });
  }

  /**
   * Выделение записи по её коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      items: this.state.items.map((item) => {
        if (item.code === code) {
          return {
            ...item,
            selected: !item.selected,
          };
        }
        return item;
      }),
    });
  }

  // Добавление в корзину

  addToCartList(code) {
    console.log(
      "+++++++++++++++++++++ addToCartList ++++++++++++++++++++++++++++++++++++++"
    );
    const state = this.getState();
    const cartList = state.cartList;
    const index = cartList.findIndex((item) => item.code === code);

    if (index > -1) {
      const cartItem = cartList[index];

      this.setState({
        ...state,
        cartList: cartList.slice(0, index).concat(
          {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          },
          cartList.slice(index + 1)
        ),
      });
    } else {
      const item = state.items.find((item) => {
        return item.code === code;
      });

      this.setState({
        ...state,
        cartList: cartList.concat({
          ...item,
          quantity: 1,
        }),
      });
    }
  }
}

export default Store;
