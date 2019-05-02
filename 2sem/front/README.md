
# ![Logo of the project](https://user-images.githubusercontent.com/16698238/57081592-bb839800-6cfd-11e9-997d-86f642d4d13b.png) Технотрэк. Углубленная Frontend-разработка 
> 14 занятий, 9 ДЗ

Цель курса — познакомить студентов с таким направлением IT-разработки, как Frontend. Мы даём студентам базовые и продвинутые навыки Frontend-разработки, а также знакомим их со всеми необходимыми принципами, правилами и подходами к разработке современных web-приложений

## Необходимые знания для понимания курса

Минимальные требования для работы над домашними заданиями:
* Знания и навыки, полученные на курсе
**[фронтэнд разработка:1 семестр](https://github.com/frontend-track-mail-ru/tt-fullstack/tree/master/1sem/front)**:
  * настройка окружения:
    * [git](https://github.com)
    * [node](https://nodejs.org/en/)
  * Базовый уровень `javascript`:
    * типы и структуры данных
    * реализация базовых алгоритмов на `js`
    * работа с `DOM API`
    * пакетный менеджер `npm`
    * популярные библиотеки (
      [lodash](https://www.npmjs.com/package/lodash),
      [babel](https://babeljs.io/),
      [axios](https://www.npmjs.com/package/axios)
    )
  * протоколы взаимодействия клиента и сервером:
    * http/1.1
  * начальный уровень **[React](https://reactjs.org/)**:
    * структура `React` приложения
    * состояние (`state`), и свойства (`props`) компонента
    * жизненный цикл компонента
    * `jsx`
    * `virtual DOM`
  * базовые представления об основных уровнях **[сетевой модели](https://ru.wikipedia.org/wiki/Сетевая_модель_OSI)**:
    * транспортный уровень (
      [tcp](https://tools.ietf.org/html/rfc793),
      [udp](https://tools.ietf.org/html/rfc768)
    )
    * прикладной уровень (
      [http](https://tools.ietf.org/html/2616),
      [websockets](https://tools.ietf.org/html/rfc6455)
    )
  * минимальные навыки работы с **[GIT](https://github.com)**:
    * clone
    * checkout
    * add
    * commit
    * pull
    * push

### Необходимые сервисы

* **[Github](https://github.com)** для работы над проектом в течение курса
и выполнения домашних заданий
* **[Google](https://google.com)** для работы с **[firebase](https://firebase.google.com/)**
* **[Sentry](https://sentry.io)** для последующей настройки логгирования
* **[Travis](https://travis-ci.org)** для последующей настройки CI/CD

## Подготовка к разработке

Во втором семестре мы продолжаем работу над проектом,
который начали в пером семестре.

Если, по каким-то причинам, у вас нет проекта,
либо вы хотите начать все сначала (
**этот вариант необходимо согласовать с преподавателем**,
т.к. необходимо выполнить все дз из первого семестра
), тогда вам нужно выполнить следующие команды:

```bash
mkdir tt-fullstack && cd $_
npx create-react-app `date +"%Y"`-FS-11-Frontend-YOURLASTNAME
```

После выполнения команд выше, у вас появится директория `tt-fullstack`,
внутри которой будет развернуто `React` приложение с именем, например `2019-FS-11-Frontend-Opalev`.
 
Далее необходимо будет зайти в папку с новым проектом
и выполнить установку всех записимостей.

```bash
npm i && yarn install
```

Когда установка завершена, нужно запустить сервер разработки и убедиться, что
в браузере (по умолчанию – `localhost:3000`) отображается ваше новое приложение.

![React app init screen](https://user-images.githubusercontent.com/16698238/57071120-1dce9f80-6ce2-11e9-9d0e-782d37cbbd2d.png)

## Разработка 

Работа над проектом ведется путем получения задач/домашних работ
после каждой лекции.

* [Задача 1](https://github.com/frontend-track-mail-ru/tt-fullstack/tree/master/2sem/front/lesson-1)
* [Задача 2](https://github.com/frontend-track-mail-ru/tt-fullstack/tree/master/2sem/front/lesson-2)
* [Задача 3](https://github.com/frontend-track-mail-ru/tt-fullstack/tree/master/2sem/front/lesson-3)
* [Задача 4](https://github.com/frontend-track-mail-ru/tt-fullstack/tree/master/2sem/front/lesson-4)
* [Задача 5](https://github.com/frontend-track-mail-ru/tt-fullstack/tree/master/2sem/front/lesson-5)
* [Задача 6](https://github.com/frontend-track-mail-ru/tt-fullstack/tree/master/2sem/front/lesson-6)
* [Задача 7](https://github.com/frontend-track-mail-ru/tt-fullstack/tree/master/2sem/front/lesson-7)
* [Задача 8](https://github.com/frontend-track-mail-ru/tt-fullstack/tree/master/2sem/front/lesson-8)
* [Задача 9](https://github.com/frontend-track-mail-ru/tt-fullstack/tree/master/2sem/front/lesson-9)

Домашнаяя работа выполняется в `Feature` ветке, соответствующей номеру ДЗ и/или названию лекции.

```bash
git checkout master  # или devel
git checkout -b task-2-webworkers
```

После того, как работа над ДЗ закончена, должен быть создан пулл реквест с
`Feature` ветки в `Master` или `Devel`. В пулл реквесте указать преподавателя в
качестве ревьюера.

## Общение и вопросы

Общение между студентами и преподавателями в рамках данной программы происходит
в группе телеграмма. Доступ в группу предоставляет `Арина @arinamoli`. 

## Преподаватели курса

* [Мартин Комитски](https://track.mail.ru/profile/m.komitski/)
* [Борис Ребров](https://track.mail.ru/profile/b.rebrov/)
* [Алексей Опалев](https://track.mail.ru/profile/a.opalev/)
