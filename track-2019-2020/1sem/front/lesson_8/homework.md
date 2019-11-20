### Взаимодействие с сервером

Слайды доступны по адресу: https://track-mail-ru.github.io/client-server/

### Полезные ссылки

* [What are Long-Polling, Websockets, Server-Sent Events (SSE) and Comet?](https://stackoverflow.com/a/12855533/3984110)
* [XHR Fetch Axios code examples](https://github.com/academind/xhr-fetch-axios-intro/tree/master)
* [Jake Archibald: In The Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0&vl=iw)
* [Sysetm design primer](https://github.com/donnemartin/system-design-primer)
* [What happens when you type google.com into your browser](https://github.com/alex/what-happens-when)
* [HTTP1.1](https://tools.ietf.org/html/rfc7231)
* [HTTP2](https://tools.ietf.org/html/rfc7540)
* [JSON data mock](https://www.json-generator.com/)
* [Normalizr experiments](https://stackblitz.com/edit/normalizr-playground-jzc2zj?file=index.ts)

### Домашнее задание

<font size="30px">Необходимо:</font>

* Добавить отдельный "общий" чат к существующему списку чатов
* Передавать новые сообщения на бэк
* Получать новые сообщения с бэкенда в режиме реального времени (RTU)
* Можно использовать любую из технологий для RTU (polling, sse, ws)

### Как это сделать в коде

#### Классовый компонент

```js
class SomeComponent extends React.Component {
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
}
```

#### Функциональный компонент

```js
import { useEffect, useState } from React;

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
}
```

#### Обновление в "реальном времени"

```js
const pollItems = () => {
  fetch(`${API_URL}?key=value&another_key=another_value`)
    .then(resp => resp.json())
    .then(data => console.log(data));
}

const t = setInterval(() => pollItems(), 3000);

// clearInterval(t)
```
 
### Бэкенд

Для запросов на создание и получение сообщений:

* Использовать свой бэкенд (сервер и бд !учесть CORS)
* Использовать [фронтовый бэкенд: общая бд – ваши сообщения могут видеть все](https://github.com/track-mail-ru/tt-front-server)

Если вы решаете использовать наш бэкенд (в том случае, если хотите реализовать RTU с помощью SSE или WS):

1. Склонировать себе репозиторий: https://github.com/track-mail-ru/tt-front-server
1. Выполнить установку зависимостей
1. Запустить локально сервер (CORS уже прописаны): npm run server
1. Сервер будет принимать запросы по адресу `localhost:9000`

### Условия сдачи дз:

1. Обращаться к локальному бэкенду до тех пор, пока не будет задеплоен бэкенд.
1. Сообщения необходимо отправлять с разных клиентов/вкладок.
1. При сдаче дз приложить гиф/видео с обновлением сообщений в общем чате.

### Сдача дз без штрафа:

До 4 декабря
