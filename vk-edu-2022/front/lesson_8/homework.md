# Домашнее задание 8

## Ознакомиться с документацией по ссылкам

- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [File API](https://developer.mozilla.org/en-US/docs/Web/API/File)
- [Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification)
- [MediaRecorder API](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder)
- [Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Что может современный web](https://whatwebcando.today/) – Отсюда можно брать идеи для фичей


## Задание

* Реализовать отправку координат пользователя используя `Geolocation API`. После получения координат, сформировать сообщение со сслылкой вида `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`
* Реализовать отправку картинок
  * Картинки должны отображаться в сообщении и отправляться `POST` запросом в виде `FormData` на сервер `https://tt-front.vercel.app/upload` (название поля `image`)
  * Картинки можно перетащить в чат из проводника с помощью `Drag and Drop` (только при активном окне чата)
  * Картинки нужно отображать в чате после их загрузки на сервер и отправки сообщением в чат с полем `image` и путём загруженного файла `src`
  * Сохранять картинки в `localStorage` не нужно
* Реализовать запись и отправку голосовых сообщений
  * Добавить кнопку с иконкой микрофона для запуска записи
  * При клике на кнопку иконка должна визуально подтверждать, что запись началась
  * Добавить либо дополнительную кнопку, либо любое другое удобное решение для того, чтобы остановить запись
  * Голосовые сообщения должны отправляться в виде сообщения с полем `audio` и полученным путём загруженного файла `src` в чат, сам файл должен отправляться `POST` запросом в виде `FormData` на сервер `https://tt-front.vercel.app/upload` (название поля `audio`)
  * Голосовые сообщения должны уметь проигрываться в браузере после отправки
  * Сохранять голосовые сообщения в `localStorage` не нужно
* При получении сообщений из соседних чатов (т.е. для тех, которые не в фокусе на текущий момент) делать:
  * Локальные уведомления
  * Звуковое сопровождение
  * Вибрацию и любые другие фичи по желанию

## Примечание
* Наш тестовый [сервер](https://tt-front.vercel.app/) принимает файлы размером не более 4-6 MB. Имейте это ввиду при разработке. Если он будет выдавать ошибки, то можно запустить сервер локально и продолжить разработку
* https://tt-front.vercel.app/files – тут можно протестировать отправку формы с файлами (картинки, аудио)
* Если ваш бекенд уже готов получать файлы, то можете использовать его вместо нашего "общего" бекенда.

## Срок: до 1 декабря (включительно)

ДЗ должно соответствовать критериям из [инструкции](https://github.com/track-mail-ru/homework#9-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D1%81%D0%B4%D0%B0%D1%87%D0%B8-%D0%B4%D0%B7).

При сдаче ДЗ необходимо убедиться, что у вас без ошибок выполняется команда `npm run build`.

После создания пулл реквеста у вас проходит сборка проекта в `Github Actions`.

Необходимо проверить, что всё необходимое задеплоилось корректно и готово к проверке.
