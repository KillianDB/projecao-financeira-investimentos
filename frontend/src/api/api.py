import requests;

base_url = 'http://localhost:3333/api'

session = requests.Session()
session.headers.update({'Content-Type': 'application/json'})

def make_request(method, endpoint, data=None):
    url = f'{base_url}/{endpoint}'
    
    if method == 'GET':
        response = session.get(url)
    elif method == 'POST':
        response = session.post(url, json=data)
    elif method == 'PUT':
        response = session.put(url, json=data)
    elif method == 'DELETE':
        response = session.delete(url)
    else:
        raise ValueError(f'Método HTTP não suportado: {method}')
    
    return response