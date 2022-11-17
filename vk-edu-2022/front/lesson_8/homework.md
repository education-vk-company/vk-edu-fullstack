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
  * Картинки должны отображаться в сообщении и отправляться на сервер `https://tt-front.vercel.app/upload` (название поля `image`)
  * Картинки можно перетащить в чат из проводника с помощью `Drag and Drop` (только при активном окне чата)
  * Сохранять картинки в `localStorage` не нужно
* Реализовать запись и отправку голосовых сообщений
  * Голосовые сообщения должны проигрываться в браузере и отправляться на сервер `https://tt-front.vercel.app/upload` (название поля `audio`)
  * Сохранять голосовые сообщения в `localStorage` не нужно
* При получении сообщений из соседних чатов (т.е. для тех, которые не в фокусе на текущий момент) делать:
  * Локальные уведомления
  * Звуковое сопровождение
  * Вибрацию и любые другие фичи по желанию

* Если ваш бекенд уже готов получать файлы, то можете использовать его вместо нашего "общего" бекенда.

## Срок: до 1 декабря (включительно)

ДЗ должно соответствовать критериям из [инструкции](https://github.com/track-mail-ru/homework#9-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0-%D1%81%D0%B4%D0%B0%D1%87%D0%B8-%D0%B4%D0%B7).

При сдаче ДЗ необходимо убедиться, что у вас без ошибок выполняется команда `npm run build`.

После создания пулл реквеста у вас проходит сборка проекта в `Github Actions`.

Необходимо проверить, что всё необходимое задеплоилось корректно и готово к проверке.
