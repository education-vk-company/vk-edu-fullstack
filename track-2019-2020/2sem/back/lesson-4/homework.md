# Домашнее задание 4

## Задание:

- Прикрутить memcached (2 балла);
Установить memcached при помощи apt-get install memcached. Поднять его при помощи systemctl или service.
- Написать bash или python скрипт, наполняющий базу искусственными синтетическими данными (доп. 2 балла);
- Использование профайлера (2 балла); После наполнения базы, посылать запросы и в какой-то момент времени сделать дамп результатов и графически отобразить его при помощи flamegraph или gprof2dot.
- Реализовать класс LFUCache или LRUCache (4 балла).
Класс должен содержать следующие методы
class ICache:
    def __init__(self, capacity=10):
        pass
    
    def get(key: str) -> str:
        pass

    def set(key: str, value: str) -> None:
        pass

    def del(key: str) -> None:
        pass

Проверяться работоспособность должна так:
from cache import LRUCache

cache = LRUCache(100)
cache.set('Jesse', 'Pinkman')
cache.set('Walter', 'White')
cache.set('Jesse', 'James')
cache.get('Jesse') # вернёт 'James'
cache.del('Walter')
cache.get('Walter') # вернёт ''

Никто не осудит, если реализуете только LRUCache.
## Срок: Сроков нет, но вы держитесь! Всего вам доброго, хорошего настроения и здоровья!
