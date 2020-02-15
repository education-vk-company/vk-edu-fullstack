# Домашнее задание 1

## Ознакомиться с документацией по ссылкам

- [Полная документация по CRA](https://create-react-app.dev/docs/getting-started)
- [Полная документация по Jest](https://jestjs.io/docs/en/getting-started)
- [Snapshot testing](https://jestjs.io/docs/en/snapshot-testing)
- [Пример теста](https://github.com/track-mail-ru/react-tests/blob/master/src/components/tests/Dummy.test.js)
- [Storybook документация](https://storybook.js.org/docs/guides/quick-start-guide/)
- [Storybook обучалка](https://www.learnstorybook.com/intro-to-storybook)
- [Пример Storybook story](https://github.com/track-mail-ru/react-tests/blob/master/src/stories/Dummy.stories.js)

## Задание:

- Обновить версию `CRA`
- Добавить в `dev` зависимости проекта библиотеку `react-test-renderer`
- Добавить в `package.json` скрипт `"test:unit": "react-scripts test",`
- Разработать snapshot unit тесты для атомарных компонентов
- Выполнить `npx -p @storybook/cli sb init` для установки утилиты
- Разработать `Storybook stories` для атомарных компонентов, они должны быть видны после запуска `npm run storybook`

>Атомарные компоненты - это простые компоненты, которые выполняют только одно действие, например, кнопка, ссылка или аватар.


## Срок: 27 февраля

При сдаче ДЗ необходимо убедиться, что у вас без ошибок выполняется команда `npm run test`.
После создания пулл реквеста у вас проходит сборка проекта в трэвисе.
