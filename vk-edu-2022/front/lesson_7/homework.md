# Домашнее задание 7

## Ознакомиться с материалами по ссылке

* [React: AJAX and APIs](https://reactjs.org/docs/faq-ajax.html)
* [What are Long-Polling, Websockets, Server-Sent Events (SSE) and Comet?](https://stackoverflow.com/a/12855533/3984110)
* [XHR Fetch Axios code examples](https://github.com/academind/xhr-fetch-axios-intro/tree/master)

Если испытываете проблемы с написанием запроса на сервер на реакте, помогут две статьи с примерами:

* [How to send HTTP Requests in React](https://malcoded.com/posts/react-http-requests-axios/)
* [Запрос к API c React Hooks, HOC или Render Prop](https://habr.com/ru/post/453866/)

## Задание

* Добавить отдельный "общий" чат к существующему списку чатов, используя наш [backend](#backend)
* Передавать новые сообщения на общий backend
* Получать новые сообщения с backend в режиме реального времени (Polling, SSE). Все имеющиеся полезные поля, включая автора, дату и текст, должны выводиться
* Интегрировать все имеющиеся собственные API с вашими экранами

### Backend

Для запросов на создание и получение сообщений:

* Использовать свой backend (сервер и БД, **учесть CORS**, либо **настроить proxy**)
* Настроить proxy для локальной разработки [по инструкции](https://create-react-app.dev/docs/proxying-api-requests-in-development/)
* Использовать [общий фронтовый backend](https://github.com/track-mail-ru/tt-front-server). Там общая БД – ваши сообщения смогут увидеть все

Если вы хотите использовать наш backend для реализации RTU с помощью SSE:

* Склонировать себе [репозиторий](https://github.com/track-mail-ru/tt-front-server)
* Выполнить установку зависимостей
* Запустить локально сервер (настройки CORS уже прописаны): `npm start`
* Сервер будет принимать запросы по адресу `localhost:9000`
* Сделать по аналогии с [примером](https://github.com/track-mail-ru/tt-front-server/blob/master/views/messages.pug)

### Как можно сделать запросы в коде

<details>
  <summary>Классовый компонент</summary>
  <pre><code>class SomeComponent extends React.Component {
  state = {
    // state declaration
    messages = []
  }

  componentDidMount () => {
    this.getMessages()
  }

  getMessages = () => {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          messages: data.messages
        });
      });
  };
}</code></pre>
</details>

<details>
  <summary>Функциональный компонент</summary>
  <pre><code>import { useEffect, useState } from React;

const API_URL = 'https://tt-front.vercel.app/messages';
const SomeFunctionalComponent = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMessages(data.messages)
      });
  }, []);
}</code></pre>
</details>

<details>
  <summary>Обновление в "реальном времени" (polling)</summary>
  <pre><code>const API_URL = 'https://tt-front.vercel.app/messages';
const pollItems = () => {
  fetch(`${API_URL}`)
    .then(resp => resp.json())
    .then(data => console.log(data));
}

const t = setInterval(() => pollItems(), 3000);

// clearInterval(t)</code></pre>
</details>

### Условия сдачи ДЗ:

* Для собственных API можно обращаться к локальному бекенду до тех пор, пока он не будет задеплоен
* При сдаче ДЗ приложить gif/видео с обновлением сообщений в общем чате

## Срок: до 24 ноября (включительно)

ДЗ должно соответствовать критериям из [инструкции](https://github.com/track-mail-ru/homework#9-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D1%81%D0%B4%D0%B0%D1%87%D0%B8-%D0%B4%D0%B7).

При сдаче ДЗ необходимо убедиться, что у вас без ошибок выполняется команда `npm run build`.

После создания пулл реквеста у вас проходит сборка проекта в `Github Actions`.

Необходимо проверить, что всё необходимое задеплоилось корректно и готово к проверке.
