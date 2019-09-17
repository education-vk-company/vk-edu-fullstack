## Домашнее задание 1

# Наполнить БД тестовыми данными и сделать дамп базы (доп. 2 балла)

Так как несколько таблиц, то необходимо сделать тестовую базу (4-5 пользователей), у каждого пользователя есть
несколько чатов (2-3 чата), в каждом чате порядка 10 сообщений. Нужно написать скрипт для генерации этих действий: пользователей,
чаты пользователей и сообщений.
Установить клиента питоновского для работы postgresql
sudo pip install py-postgresql

И написать код, который всё сгенерирует эти данные.
import postgresql
with postgresql.open('pq://postgres:postgres@localhost:5432/mydb') as db:
    ins = db.prepare("INSERT INTO users (login, password) VALUES ($1, $2)")
    ins("afiskon", "123")

Сделать дамп после заполнения:
pg_dump dbname > outfile

# Использовать memcached (4 баллов)

Для начала необходимо установить memcached:
sudo apt-get install memcached
или для macOS
brew install memcached

Запустить его при помощи команды:
sudo systemctl start memcached

Теперь memcached доступен по порту 11211.

Добавить для метода/методов кэширование информации (например, получение списка чатов пользователя). Но
нужно помнить, что при добавлении нового чата, то кеш нужно обновить иначе в следующий раз пользователю
покажется старый список чатов, а это плохо.

from werkzeug.contrib.cache import MemcachedCache
cache = MemcachedCache(['127.0.0.1:11211'])
...
def get_my_item():
    rv = cache.get('my-item')
    if rv is None:
        rv = calculate_value()
        cache.set('my-item', rv, timeout=5 * 60)
    return rv

# Использование профайлера (4 балла)
Использовав профайлер ProfilerMiddleware для Flask'а, запрофилировать отдельно 3-4 реализованных метода API.
На каждый запрос выведится табличка с 30 самыми долгими методами и сохранить результаты в отдельные файлы.

from werkzeug.contrib.profiler import ProfilerMiddleware

app = Flask(__name__)
...
app.wsgi_app = ProfilerMiddleware(app.wsgi_app, restrictions=[30])

