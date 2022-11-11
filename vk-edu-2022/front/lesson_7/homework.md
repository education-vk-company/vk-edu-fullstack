### Домашнее задание 7

## Ознакомиться с материалами по ссылке

* [React: AJAX and APIs](https://reactjs.org/docs/faq-ajax.html)
* [What are Long-Polling, Websockets, Server-Sent Events (SSE) and Comet?](https://stackoverflow.com/a/12855533/3984110)
* [XHR Fetch Axios code examples](https://github.com/academind/xhr-fetch-axios-intro/tree/master)

Если испытываете проблемы с написанием запроса на сервер на реакте, помогут две статьи с примерами:

* [How to send HTTP Requests in React](https://malcoded.com/posts/react-http-requests-axios/)
* [Запрос к API c React Hooks, HOC или Render Prop](https://habr.com/ru/post/453866/)

## Задание

* Добавить отдельный "общий" чат к существующему списку чатов
* Передавать новые сообщения на backend
* Получать новые сообщения с backend в режиме реального времени (RTU)
* Можно использовать любую из технологий для RTU (Polling, SSE, WS)

### Как это сделать в коде

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

### Backend

Для запросов на создание и получение сообщений:

* Использовать свой backend (сервер и БД !учесть CORS)
* Использовать [общий фронтовый backend: общая БД – ваши сообщения могут видеть все](https://github.com/track-mail-ru/tt-front-server)

Если вы решаете использовать наш backend (в том случае, если хотите реализовать RTU с помощью SSE или WS):

* Склонировать себе репозиторий: https://github.com/track-mail-ru/tt-front-server
* Выполнить установку зависимостей
* Запустить локально сервер (CORS уже прописаны): npm run server
* Сервер будет принимать запросы по адресу `localhost:9000`

### Условия сдачи ДЗ:

* Для собственных API можно обращаться к локальному бекенду до тех пор, пока он не будет задеплоен
* Сообщения необходимо отправлять с разных клиентов/вкладок.
* При сдаче ДЗ приложить gif/видео с обновлением сообщений в общем чате

## Срок: до 24 ноября (включительно)

ДЗ должно соответствовать критериям из [инструкции](https://github.com/track-mail-ru/homework#9-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D1%81%D0%B4%D0%B0%D1%87%D0%B8-%D0%B4%D0%B7).

При сдаче ДЗ необходимо убедиться, что у вас без ошибок выполняется команда `npm run build`.

После создания пулл реквеста у вас проходит сборка проекта в `Github Actions`.

Необходимо проверить, что всё необходимое задеплоилось корректно и готово к проверке.
