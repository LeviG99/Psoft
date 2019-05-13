from threading import Thread
import time

def contador(nome, segundos, intervalo):
    while segundos:
        print("%s: %s" % (nome, segundos))
        time.sleep(intervalo / 1000)
        segundos -= 1
cincosec = Thread(target=contador, args=("5 Segundos", 5, 1000))
a = Thread(target=contador, args=("A", 15, 300))
print('Iniciando contador 1 ("5 Segundos")')
cincosec.start()
time.sleep(5)
print('Iniciando contador 2 ("A")')
a.start()
time.sleep(5)
print('Fim')
