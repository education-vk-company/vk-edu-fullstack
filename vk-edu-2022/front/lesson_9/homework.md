# Домашнее задание 9

## Ознакомиться с материалами по ссылкам

* [React redux getting started](https://react-redux.js.org/introduction/quick-start)
* [Redux getting started](https://redux.js.org/introduction/getting-started)
* [Redux with router](https://redux.js.org/advanced/usage-with-react-router)

## Материалы для закрепления знаний по redux

* [2019 Using Redux and Redux-Thunk with ReactJS. Explained](https://medium.com/@konstankino/2019-redux-and-redux-thunk-for-reactjs-explained-e249b70d6188)
* [Redux Sample Project with 500px API](https://github.com/yildizberkay/redux-example)

## Задание

* Подключить `redux` с помощью библиотеки `react-redux`
* Определить изменяемые данные, которые нужны в нескольких компонентах (например, сообщения и др.)
* Перенести эти данные в `store`
* Подключить к `store` компоненты, которые используют эти данные

<details>
  <summary>Что для этого сделать</summary>
  <ul>
    <li>Установить новые зависимости (redux redux-thunk react-redux)</li>
    <li>Создать constants/ActionTypes.js</li>
    <li>Создать actions.js</li>
    <li>Создать reducers/messages.js // и любые другие редьюсеры по желанию</li>
    <li>Создать reducers/index.js</li>
    <li>Создать store.js</li>
    <li>Обернуть приложение в Provider</li>
    <li>В компонентах функции обернуть в connect</li>
    <li>Пример: https://github.com/track-mail-ru/cra-thunk, либо в записи лекции</li>
  </ul>
</details>

## Срок: до 8 декабря (включительно)

ДЗ должно соответствовать критериям из [инструкции](https://github.com/track-mail-ru/homework#9-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D1%81%D0%B4%D0%B0%D1%87%D0%B8-%D0%B4%D0%B7).

При сдаче ДЗ необходимо убедиться, что у вас без ошибок выполняется команда `npm run build`.

После создания пулл реквеста у вас проходит сборка проекта в `Github Actions`.

Необходимо проверить, что всё необходимое задеплоилось корректно и готово к проверке.
