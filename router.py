from http.server import BaseHTTPRequestHandler, HTTPServer

class RequestManipulator(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'Home')
        elif self.path == '/debentures':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'Debentures')
        elif self.path == '/cdb-cdi':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'CDB/CDI')
        elif self.path == '/lci-lca':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'LCI/LCA')
        elif self.path == '/tesouro-direto':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'Tesouro Direto')
        elif self.path == '/letra-de-cambio':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'Letra de Cambio')
        elif self.path == '/cri-cra':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'CRI/CRA')
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
