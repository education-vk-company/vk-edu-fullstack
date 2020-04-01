#! /usr/local/bin/python3

import json
import socket

import requests
from bs4 import BeautifulSoup

def scrape_url(url):
    response = requests.get(url)
    html_content = response.content
    soup = BeautifulSoup(html_content, 'html.parser')
    result = {} #{'url': 'https://mail.ru', 'title': 'Mail.ru'}
    for field in ['url', 'title', 'image', 'description', 'type']:
        try:
            field_content = soup.find('meta', property=f"og:{field}").get('content')
            result[field] = field_content
        except:
            continue
    return json.dumps(result)

def main():
    socket_server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    socket_server.bind(('', 8090))
    socket_server.listen(5)
    while True:
        client_socket, addr = socket_server.accept()
        data = b''
        tmp = client_socket.recv(1024)
        while tmp:
            data += tmp
            if tmp.endswith(b'\r\n'):
                break
            tmp = client_socket.recv(1024)
        content = data.strip()

        url_info = scrape_url(content)

        # Должен быть logger.info(...)
        print(f'Sending content [{content.decode("utf8")}]')
        client_socket.send(url_info.encode('utf8'))
        client_socket.close()
        
        
    socket_server.close()

if __name__ == "__main__":
    main()
