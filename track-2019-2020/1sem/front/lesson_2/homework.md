# Домашнее задание 2

## Ознакомиться с документацией по ссылкам

- [Устройство браузера](https://html5rocks.appspot.com/en/tutorials/internals/howbrowserswork/) и [архитектура Chrome](https://developers.google.com/web/updates/2018/09/inside-browser-part1)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
- [EventLoop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- Интерфейсы [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) и [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
- [Учебник JavaScript](http://learn.javascript.ru/js), в частности его разделы о [современных возможностях js](https://learn.javascript.ru/es-modern-usage), [DOM](https://learn.javascript.ru/document) и [WebComponents](https://learn.javascript.ru/web-components).
- [Инструмент eslint](https://eslint.org/docs/user-guide/getting-started)
- [Установка и настройка eslint](https://travishorn.com/setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide-6eb78a535ba6)

## Реализовать экран чата приложения Messenger

Используем генератор:

```bash
npm i -g generator-track-mail@latest
npm ls generator-track-mail --depth 0 # должен вывести generator-track-mail@0.3.0
cd 2019-2-<my_project>
yo track-mail:web-components
```
В итоге будет создана папка `web-components` в разделе вашего проекта.

* Для тех, у кого не получается - придется копировать ручками папку [отсюда](https://github.com/track-mail-ru/track-mail/tree/master/web-components).

___

- За основу взять каркас приложения из дириктории `web-components`;
- Приложение представляет собой окно чата, в которое можно отправлять сообщения;
- Стилизовать форму отправки сообщений, в соответствии с [макетом](https://scene.zeplin.io/project/5b9a4b6aae5aa72171a8e5cf/screen/5b9a4b81fc8e9e51e96b6067), для позиционирования элементов формы использовать [CSS Flexbox](https://developer.mozilla.org/ru/docs/Web/CSS/flex);
- По нажатию на кнопку, сообщение сохраняется в `localStorage` и добавляется к списку сообщений выше;
- После нажатия на кнопку поле ввода должно очищаться;
- Сообщение должно содержать текст, имя отправителя и время отправки (формат, в котором это будет храниться в `localStorage` необходимо придумать самим);
- При обновлении страницы уже "отправленные" сообщения загружаются из `localStorage`;
- Добавить линтер на проект с конфигом `airbnb`;
- Добавить `npm` скрипт `test` (должен запускаться по `npm run test`), который будет запускать линтер.

#### Деплой домашнего задания #2

Для развертывания домашнего задания на gh-pages необходимо убедиться, что в ваш `.travis.yml` конфиг выголядит следующим образом:

```
language: node_js
node_js:
  - "stable"

before_install:
  - cd web-components

script:
  - npm run test
  - npm run build

deploy:
  provider: pages
  skip_cleanup: true
  github_token: $repo_token
  local_dir: web-components/build
  on:
    branch:
      - master
      - devel
```

Ключевые изменения: `before_install` и `deploy.local_dir`.
Теперь сборка происходит из директории `web-components`.

При сдаче ДЗ необходимо убедиться, что у вас без ошибок выполняется команда `npm run test`.
После создания пулл реквеста у вас проходит сборка проекта в трэвисе.
