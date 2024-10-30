# Домашнее задание 7

## Ознакомиться с материалами по ссылке

* [React: AJAX and APIs](https://reactjs.org/docs/faq-ajax.html)
* [What are Long-Polling, Websockets, Server-Sent Events (SSE) and Comet?](https://stackoverflow.com/a/12855533/3984110)
* [XHR Fetch Axios code examples](https://github.com/academind/xhr-fetch-axios-intro/tree/master)

Если испытываете проблемы с написанием запроса на сервер на реакте, помогут две статьи с примерами:

* [How to send HTTP Requests in React](https://malcoded.com/posts/react-http-requests-axios/)
* [Запрос к API c React Hooks, HOC или Render Prop](https://habr.com/ru/post/453866/)

## Задание

* Использовать наш задеплоенный [backend](#backend)
* Добавить запрос на регистрацию и авторизацию (пока можно без отдельного красивого экрана)
* Интегрировать API для чатов
  * Передавать исходящие сообщения на backend
  * Получать входящие сообщения с backend в режиме реального времени (Polling, WS). Все имеющиеся полезные поля, включая автора, дату и текст, должны выводиться в интерфейсе
* Интегрировать все имеющиеся API с вашими экранами. Если каких-то экранов нет, то это будет фоновой задачей на всех последующих ДЗ

### Backend

Для запросов к backend нужно иметь ввиду:

* Использовать [backend](https://github.com/education-vk-company/vk-edu-messenger-backend/tree/main). Там общая БД – ваши сообщения смогут увидеть все, если создать общий чат на нескольких человек. [Swagger](https://github.com/education-vk-company/vk-edu-messenger-backend/blob/main/swagger.yaml). Рекомендуется максимально внимательно прочитать readme
* Backend доступен по https://vkedu-fullstack-div2.ru/api/
* Настроить proxy для локальной разработки [по инструкции](https://create-react-app.dev/docs/proxying-api-requests-in-development/) или для [vite](https://www.geeksforgeeks.org/how-to-configure-proxy-in-vite/)

### Как можно сделать запросы в коде

См. примеры в readme репозитория с backend.

### Условия сдачи ДЗ:

* При сдаче ДЗ приложить gif/видео с наглядной демонстрацией процессов

## Срок: до 7 ноября (включительно)

ДЗ должно соответствовать критериям из [инструкции](https://github.com/education-vk-company/homework#9-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D1%81%D0%B4%D0%B0%D1%87%D0%B8-%D0%B4%D0%B7).

При сдаче ДЗ необходимо убедиться, что у вас без ошибок выполняется команда `npm run build`.

После создания пулл реквеста у вас проходит сборка проекта в `Github Actions`.

Необходимо проверить, что всё необходимое задеплоилось корректно и готово к проверке.
