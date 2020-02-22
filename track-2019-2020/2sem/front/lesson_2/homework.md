# Домашнее задание 2

## Ознакомиться с документацией по ссылкам:

- [Документация по Headless Chrome](https://developers.google.com/web/updates/2017/04/headless-chrome)
- [Документация по puppeteer](https://pptr.dev/)
- [Документация по jest-puppeteer](https://github.com/smooth-code/jest-puppeteer/blob/master/README.md)
- [Официальный jest-puppeteer гайд](https://jestjs.io/docs/en/puppeteer#use-jest-puppeteer-preset)
- [Селекторы css](https://devhints.io/css)
- [Селекторы xpath](https://devhints.io/xpath)

## Задание:

Разработать функциональные тесты по сценариям:

1. Пользователь входит в приложение, проходит в список чатов, набирает и отправляет сообщение.
2. Пользователь входит в приложение, приходит в профиль, изменяет свое имя (при наличии функционала)

Если у вас нет функционала с профилем и сменой имени пользователя, то вам необходимо разработать свой собственный сценарий.

Любые собственные сценарии будут приветствоваться.

- Добавить в `dev` зависимости проекта библиотеки  `puppeteer`, `jest-puppeteer`
- Добавить в корень проекта директорию `integration`
- В директории `integration` добавить модуль `jest.config.js`
    ```js
    module.exports = {
      preset: 'jest-puppeteer',
      testRegex: './*\\.test\\.js$',
    }
    ```
- Добавить функциональные (е2е) тесты в директорию `integration` (eg: chat.test.js)
- Добавить в `package.json` скрипт `"test:integration": "jest -c integration/jest.config.js",`
- Добавить в корень проекта модуль `jest-puppeteer.config.js`
    ```js
    module.exports = {
      launch: {
        headless: false,  // для отображения в клиенте
      },
      server: {
        command: `npm start`,
        port: 3000,
        launchTimeout: 10000,
        debug: true,
      },
    }
    ```
- Добавить `test:integration` к шагу в сборке

## Срок: 7 марта

При сдаче вам необходимо убедиться, что у вас без ошибок выполняется команда `npm run test:integration`.

После создания PR у вас прохоидт сборка (travis/now.sh)

