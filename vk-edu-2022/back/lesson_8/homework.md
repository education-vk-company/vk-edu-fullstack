# Домашнее задание к лекции №8

### Реализовать OAuth2-авторизацию
Через любую социальную сеть/сервер ресурсов, используя библиотеку social-auth-app-django. Должна быть готова страница с кнопкой, по нажатию на которую произойдет механизм авторизации. Также для авторизованного пользователя должна отображаться кнопка логаута.

### Написать декоратор или middleware, проверяющий авторизацию при вызовах API
На все view, требующие чтобы пользователь был залогинен в системе, навесить декоратор (или использовать middleware), проверяющий есть ли пользователь в объекте HttpRequest, иначе - редирект на страницу логина.
Предусмотреть, что могут быть view, которые останутся доступны без логина.

### Изменить запросы и код API

Изменить вьюз так, чтобы в них учитывался текущий пользователь.
Допустим, у вас функция добавления пользователя в чат. Тогда ваш код был например:


```python
def add_member(request, chat_id, user_id):
    chat = get_object_or_404(Chat, id=chat_id)
	user = get_object_or_404(User, id=user_id)
	ChatMember.objects.create(chat=chat, user=user)
	return JsonResponse()
```

а теперь вы должны проверить, что пользователь в запросе админ, чтобы добавлять кого-то в чат


```python
@login_required
def add_member(request, chat_id, user_id):
	chat = get_object_or_404(Chat, id=chat_id)
	user = get_object_or_404(User, id=user_id)

	if chat.admins.filter(id=request.user.id).exists(): # как вариант реализации хранения админов
		ChatMember.objects.create(chat=chat, user=user)
		return JsonResponse()
	return JsonResponse({'error': 'Only admin can add chat members'}, status=403)
```