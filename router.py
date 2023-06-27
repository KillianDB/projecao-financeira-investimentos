from http.server import BaseHTTPRequestHandler, HTTPServer

class RequestManipulator(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('views/home.html', 'r') as file:
                content = file.read()
            self.wfile.write(content.encode('utf-8'))
        elif self.path == '/projecao':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('views/projecao.html', 'r') as file:
                content = file.read()
            self.wfile.write(content.encode('utf-8'))
        elif self.path == '/login':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('views/login.html', 'r') as file:
                content = file.read()
            self.wfile.write(content.encode('utf-8'))
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            with open('404.html', 'rb') as file:
                self.wfile.write(file.read())

server_address = ('', 3000)
httpd = HTTPServer(server_address, RequestManipulator)

print('Servidor rodando')
httpd.serve_forever()
