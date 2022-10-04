# Домашнее задание 2

## Ознакомиться с документацией по ссылкам

- [Устройство браузера](https://html5rocks.appspot.com/en/tutorials/internals/howbrowserswork/) и [архитектура Chrome](https://developers.google.com/web/updates/2018/09/inside-browser-part1)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
- [EventLoop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- Интерфейсы [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) и [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
- [Учебник JavaScript](http://learn.javascript.ru/js), в частности его разделы о [современных возможностях js](https://learn.javascript.ru/es-modern-usage) и [DOM](https://learn.javascript.ru/document).

## Реализовать экран чата приложения Messenger

### 1. Используем генератор:

```bash
npm i -g generator-track-mail@latest
npm ls -g generator-track-mail --depth 0 # Должно вывестись generator-track-mail@0.5.0
cd <my_project>
yo track-mail:simple-chat
```
В итоге будет создана папка `simple-chat` в разделе вашего проекта.

Осмотритесь в созданной структуре, рассмотрите файлы `html`, `css`, примитивный конфиг `webpack`. Он вам поможет в разработке и отладке вашей первой странички в браузере.

В примере есть `npm-скрипты`:

* `npm start` - Для запуска `webpack-dev-server`
* `npm run build` - Для сборки проекта

Приложение представляет собой прототип экрана чата, в которое можно отправлять сообщения. Запускайте `npm start` - и вперед!

### 2. Задание:

- Взять за основу каркас приложения из дириктории `simple-chat`
- Стилизовать форму отправки сообщений (в меру возможности), в соответствии с [макетом](https://scene.zeplin.io/project/5b9a4b6aae5aa72171a8e5cf/screen/5b9a4b81fc8e9e51e96b6067), для позиционирования элементов формы можно использовать [CSS Flexbox](https://developer.mozilla.org/ru/docs/Web/CSS/flex)
- Сделать так, чтобы по нажатию на кнопку `Enter`, сообщение сохранялось в `localStorage` и добавлялось к списку сообщений выше (именно добавлялось, а не рисовалось однократно)
- Поле ввода должно очищаться после нажатия на кнопку `Enter`
- Сообщение должно содержать текст, имя отправителя и время отправки (формат, в котором это будет храниться в `localStorage`, необходимо придумать самим)
- При обновлении страницы уже "отправленные" сообщения должны загружаться из `localStorage`
- Настроить деплой ваших страничек на [GitHub Pages](https://pages.github.com/)

#### Деплой домашнего задания

Воспользуемся технологией под названием [GitHub Actions](https://github.com/features/actions).

Для развёртывания домашнего задания на `GitHub Pages` необходимо создать специальный файл `.github/workflows/gh-pages.yml` со следующим содержимым*:

```
name: GitHub Pages
run-name: ${{ github.actor }} is rolling out a new version of the app 🚀
on: [push]
jobs:
  Build-and-Deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 16
    - name: Install npm deps
      working-directory: ./simple-chat
      run: npm i
    - name: Build app
      working-directory: ./simple-chat
      run: npm run build
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./simple-chat/build
```
или просто скопировать [отсюда](https://github.com/track-mail-ru/2022-2-VK-EDU-FS-Frontend-M-Komitsky/blob/hw-2/.github/workflows/gh-pages.yml).

*Если вы решили изменить название папки, где будет лежать ваша страничка, то это нужно указать и в самом конфиге.

В файле используется несколько готовых общедоступных действий (actions) для доступа к `nodejs`, `npm`, и деплою на `GitHub Pages`

Теперь после пуша в ветку, у вас будет проходить сборка проекта на `GitHub Actions` и его отгрузка на `GitHub Pages`.

Обратите внимание, что первая сборка может не пройти - это нормально. Помимо этого, после первой сборки нужно будет произвести донастройку репозитория, как показано в [документации](https://github.com/marketplace/actions/github-pages-action#%EF%B8%8F-first-deployment-with-github_token):
* Зайти в настройки репозитория
* Выбрать пункт `Pages`
* В `Build and deployment` -> `Source` выбрать `Deploy from a branch`
* В `Branches` выбрать ветку `gh-pages`

Ветка `gh-pages` должна появиться автоматически после успешного прогона вашего `CI`.

Прогоны `CI` можно смотреть на вкладке `Actions`.

Задеплоенные странички можно будет увидеть в пункте `Environments`.


#### Срок сдачи ДЗ

До 18 октября (включительно)
