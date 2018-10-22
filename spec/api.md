# API

Ниже приведено _примерное_ описание API, которе можно использовать как образец при реализации проекта.

## Структуры данных в JSON

### User
Информация о пользователе.
```
{
    "user_id": 22,
    "nick": "the.good",
    "name": "Clint Eastwood",
    "avatar": 'avatars/d9099cd0d3e6cb47fe3a9b0e631901fa.png"
}
```

### Chat
Представляет собой объект Chat с точки зрения текущего пользователя.
Поля `new_messages` и `last_read_message_id` зависят от текущего пользователя.
```
{
    "chat_id": 33,
    "is_group_chat": False,
    "topic", "Chuck Norris",
    "last_message": "argh!",
    "new_messages": 30,
    "last_read_message_id": 214
}
```

### Message
Сообщение в чате
```
{
    "message_id": 200,
    "chat_id": 33,
    "user_id": 22,
    "content", "Hmmm, @chuck.norris",
    "added_at": 1540198594
}
```

### Attachment
Приложение к сообщению, например фотка или файл
```
{
    "attach_id": 1,
    "message_id": 200,
    "chat_id": 33,
    "user_id": 22,
    "type": "image",
    "url": "attach/e7ed63c5f815d5b308c9a3720dd1949d.png"
}
```

## Методы

### Логин 
URL: `/login/` 

Это не метод API, а просто обработчик.
Его задача - выставить авторизационные куки на основе OAuth2 авторизации.

### Получение списка чатов пользователя
URL: `/list_chats/`

Параметры: 
|sort| порядок сортировки (см тз)|



