#! /usr/local/bin/python3

import sys
import json
import socket

def parse_url(url):
    client_socket = socket.socket()
    client_socket.connect(('localhost', 8090))
    url = f'{url}\r\n'
    client_socket.send(url.encode('utf8'))
    
    data = b''
    tmp = client_socket.recv(1024)
    while tmp:
        print(f'Recieved data is [{tmp}]')
        data += tmp
        tmp = client_socket.recv(1024)
    url_info = json.loads(data)
    print(f"Recieved message is {url_info}")
    client_socket.close()

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(f'Usage: {sys.argv[0]} <url>')
        sys.exit(1)
    url = sys.argv[1]
    parse_url(url)
