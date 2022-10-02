import requests


try:
    # recurso demora muito a responder
    response = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.ReadTimeout:
    # vamos fazer uma nova requisição
    response = requests.get("http://httpbin.org/delay/1", timeout=2)
finally:
    print(response.status_code)

# No exemplo acima, para efeitos didáticos, modifica-se a URL do recurso
# diminuindo o delay de resposta da requisição através do timeout
# porém normalmente este valor não muda.
