## Домашнее задание 4

- Ознакомиться с документацией по ссылкам
	 - [Анализ процесса визуализации](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp?hl=ru)
	 - [Same origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) и [CORS](https://developer.mozilla.org/ru/docs/Web/HTTP/CORS)
	 - [XHR](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest) и [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
	 - [jsonp](https://learn.javascript.ru/ajax-jsonp)
- Изменить обработчик отправки формы таким образом, чтобы данные формы передавались на сервер
	 - Для отправки запроса использовать `Fetch`
	 - Значения полей формы собирать в объекте `FormData`
	 - Если в форме выбран файл – отправлять его вместе с ней
- Бонус
	- Отображать статус отправки (загружается/загружено)
	- Настроить публикацию и установку пакета со статикой ([Scoped packages](https://docs.npmjs.com/getting-started/scoped-packages))
		 - Зарегистрировать пользователя на npmjs.org
			 - Изменить имя пакета таким образом, чтобы оно использовала имя вашего полдьзователя как namespace (`@user/package`)
			 - Определить секцию [files](https://docs.npmjs.com/files/package.json#files) в `package.json`, чтобы публиковать только результаты сборки
			 - Опубликовать пакет, как публичный: `npm publish --access=public`
			 - Инициализировать npm в репозитории backend-приложения
			 - Установить пакет с результатами сборки как зависимость
