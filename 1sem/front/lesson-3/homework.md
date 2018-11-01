## Домашнее задание 3

- Ознакомиться с документацией по ссылкам
   - [EventLoop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
   - Интерфейсы [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) и [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
   - Объекты [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
   - [Geolocation API](https://developer.mozilla.org/ru/docs/Web/API/Geolocation/Using_geolocation)
   - [File API](https://developer.mozilla.org/ru/docs/web/api/file)
- Добавить на страницу список сообщений, отображающий сообщения пользователя и его собеседника
   - Сообщения пользователя выделены цветом и выравниваются по правому крую
   - Стилизовать сообщения в соответствии с макетом
- При отправке непустой формы создания сообщения добавлять в список новое сообщение
   - Для связи между формой и списком сообщений использовать `CustomEvent`
- Создать и добавить в форму веб-компонент для выбора файла
   - При выборе файла создавать новое сообщение с информацией о нем
   - Если выбран файл изображения – отображать в списке сообщений его миниатюру
- Bonus
   - Добавить в форму компонент запрашивающий местоположение пользователя и сохраняющее координаты в поле формы
   - Реализовать возможность выбора файла с помощью Drag&Drop
