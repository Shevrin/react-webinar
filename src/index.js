import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store.js';
import App from './app.js';

const root = document.getElementById("app");

// Состояние приложения
const store = new Store({
	items: [{
		code: 1, title: 'Название элемента', count: ''
	}

		,
	{
		code: 2, title: 'Некий объект', count: ''
	}

		,
	{
		code: 3, title: 'Заголовок', count: ''
	}

		,
	{
		code: 4, title: 'Короткое название', count: ''
	}

		,
	{
		code: 5, title: 'Запись', count: ''
	}

		,
	{
		code: 6, title: 'Пример названия', count: ''
	}

		,
	{
		code: 7, title: 'Седьмой', count: ''
	}

	]
}

);

// Сообщаем реакту что и куда рендерить.
store.subscribe(() => {
	ReactDOM.render(<App store={
		store
	}

	/>, root);
}

);

// Сообщаем реакту что и куда рендерить.
ReactDOM.render(<App store={
	store
}

/>, root);