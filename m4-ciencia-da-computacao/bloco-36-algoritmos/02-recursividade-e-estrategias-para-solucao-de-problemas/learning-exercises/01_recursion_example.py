def countdown(n):
    if n == 0: # caso base
        print("FIM!")
    else:
        print(n)
        countdown(n - 1) # caso recursivo

countdown(5)

# Leis da recursão:
# 1) Um algoritmo recursivo deve ter um caso base
# 2) Um algoritmo recursivo deve mudar o seu estado e se aproximar do caso base
# 3) Um algoritmo recursivo deve chamar a si mesmo, recursivamente
