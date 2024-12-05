# Домашнее задание 13

## Ознакомиться с документацией по ссылкам

- [Документация к TS](https://www.typescriptlang.org/docs/handbook/)
- [Серия коротких роликов про TS](https://www.youtube.com/watch?v=OMsP7_bCAxY)
- https://www.typescriptlang.org/v2/en/tsconfig#outDir
- https://www.codementor.io/@elliotaplant/understanding-javascript-module-resolution-systems-with-dinosaurs-il2oqro6e

## Задание:

Нужно разработать специальную утилиту для вашего мессенджера.

Утилита должна представлять из себя готовый набор модулей на `TypeScript` для выполнения перевода строк на другие языки.

В будущем эту утилиту нужно будет прикрутить к мессенджеру.

- Получить `API key` по [ссылке](https://translate.yandex.com/developers/keys) (либо воспользоваться вариантом с [экзамена](../exam/exam.md))
- Изучить документацию [API](https://tech.yandex.com/translate/doc/dg/concepts/api-overview-docpage/) и его методов
- Установить `TypeScript` на компьютер глобально
- Создать в проекте папку `./ts/utils`
- В папке `./ts/utils` сделать `tsc --init`
- Добавить в `.gitignore` файлы `/ts/utils/*.js`
- В конфиге `TypeScript` указать для ключа `module` параметр `umd`
- Разработать набор модулей и функций на `TypeScript` для перевода строк на другие языки с использованием вышеуказанного `API`
  - Модуль должен называться `translate.ts`.
  - В папке должен присутствувать корневой файл `index.ts`, содержащий реэкспорт [такого вида](examples/index.ts).
  - Код должен быть максимально разбит на модули (и функции), как в [примере](examples/module.ts). Общие типы нужно унести в [отдельный модуль](examples/module.ts). Вспомогательные функции должны быть вынесены (не надо все городить в одном коллбеке). Придерживаемся принципа атомарности: 1 функция решает только 1 задачу.
  - В модуле должна быть функция `translate`, принимающая в себя параметры: текст, из какого языка в какой переводим, необходимость "угадать" входной язык.
  - В модуле должнен быть реализован принцип мемоизации, то есть, локального кеширования результата. Если 2 раза вызвать один и тот же перевод, то во второй раз ходить в `API` за ним не нужно. В рамках платных аккаунтов это экономит много денег.
  - В модуле должна быть предусмотрена логика обработки ошибок (ввода, сетевых, ответа и т.д.).
  - Должен быть модуль `./testTranslate.ts`, куда вы импортируете свою утилиту и будете ее тестировать и разрабатывать. Содержит что-то типа `import TranslateUtils from './';`


### Как проверить, что API работает:

```javascript
const APIKEY = ''; // ваш ключ
const api = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${APIKEY}&text=my name is john cena&lang=en-ru&format=plain`;

fetch(api).then(response => response.json()).then(data => console.log(data));
```

## Срок: до 19 декабря (включительно)

ДЗ должно соответствовать критериям из [инструкции](https://github.com/education-vk-company/homework#9-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D1%81%D0%B4%D0%B0%D1%87%D0%B8-%D0%B4%D0%B7).

При сдаче ДЗ необходимо убедиться, что у вас без ошибок выполняется команда `npm run build`.

После создания пулл реквеста у вас проходит сборка проекта в `Github Actions`.

Необходимо проверить, что всё необходимое задеплоилось корректно и готово к проверке.