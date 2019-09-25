#### 1 лекция. Не введение

Рекомендую всем заново выполнить установку проекта:

##### Установка с помощью yeoman

```bash
$ npm i -g -U generator-track-mail
$ mkdir newDirectory
$ cd newDirectory
$ yo track-mail
$ yo track-mail:functions
```

##### Установка из гита

(Репозиторий с проектом: https://github.com/track-mail-ru/atom-mail)
```bash
$ git clone https://github.com/track-mail-ru/atom-mail.git
$ cd atom-mail
$ npm i
```

##### Запуск приложения

Те из вас, кто испытывает проблемы с докером, используйте локальный npm
```bash
npm i
npm run test
npm start
```

Остальные могут запустить сервис с помощь `docker-compose`
```bash
docker-compose up -d
```

Приложение будет доступно по адресу:
`localhost:3000`

##### Деплой прииложения на gh-pages

Чтобы задеплоить приложение, нам необходимо ввести изменения в файл `package.json` (находится в корне нашего с вами приложения):
```
// ...
  "homepage": "https://__your_github_login__.github.io/__your_github_repo_name__/"  // example: "https://track-mail-ru.github.io/atom-mail/" 
//...
```
Устанавливаете `homepage` и запустите команду

```js
$ npm run deploy
```

Ваш сервис будет доступен по адресу, указанному в `homepage`.

Спасибо за ваше время и старания.

PS:
Должно получиться вот так: https://track-mail-ru.github.io/atom-mail/
