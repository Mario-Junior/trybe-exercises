def iterative_countdown(n):
    while n > 0:
        print(n)
        n = n - 1
    print("FIM!")


iterative_countdown(5)


def iterative_factorial(n):
    fact = 1

    for i in range(1, n + 1):
        fact = fact * i

    return fact


print(iterative_factorial(5))


# Como visto, escolher entre uma solução recursiva ou iterativa depende muito do que estou buscando.

# Escolher uma solução recursiva não significa ganho de performance,
# pelo contrário, grande parte das vezes, a solução iterativa será mais performática.

# Escolher a solução recursiva terá ganho na diminuição de complexidade do código do projeto.
# Aqui, complexidade significa legibilidade.
# Ou seja, o código pode ficar mais simples, mais harmonioso, quando utilizamos a recursividade.
