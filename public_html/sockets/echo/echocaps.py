import socket
import sys

porta = int(sys.argv[1] if len(sys.argv) > 1 else 9090)

with socket.socket() as s:
	s.bind(("localhost",porta))
	s.listen()
	print("Aguardando conexão na porta %s"%porta)
	conexao,endereco = s.accept()
	with conexao:
		while True:
			print("Aguardando mensagem de %s:%s"%endereco)
			mensagem = conexao.recv(4096)
			if not mensagem:break
			conexao.sendall(mensagem.upper())
		
