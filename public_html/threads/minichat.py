import socket
import sys
from threading import Thread	
porta = int(sys.argv[1] if len(sys.argv) > 1 else 9090)
s = socket.socket()
s.bind(('localhost',porta))
s.listen();
conexoes = []
def principal():
	while True:
		(conexao,cliente) = s.accept()
		conexoes.append(conexao)
		Thread(target = Cliente,args = (conexao,cliente)).start()
def Cliente(conexao,cliente):
	while True:
		mensagem = conexao.recv(4096)
		if (mensagem == b':bye\n'):
			conexoes.remove(conexao)
			conexao.close()
			break
		else:
			for con in conexoes:
				if(con != conexao):
					con.sendall(mensagem)
			    		

Thread(target=principal).start()
