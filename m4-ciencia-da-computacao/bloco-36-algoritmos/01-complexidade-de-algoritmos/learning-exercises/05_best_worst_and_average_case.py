def linear_search(numbers, target):
    n = len(numbers)  # N será a quantidade de elementos da lista
    for index in range(0, n):  # vamos iterar a lista completa
        if (
            numbers[index] == target
        ):  # se encontrar o elemento alvo, retorne a posição
            return index

    return -1  # Não encontrou? Retorne -1


print(linear_search([1, 2, 3], 2))  # saída: 1
print(linear_search([1, 2, 3], 4))  # saída: -1

# “melhor caso”, “pior caso” e “caso médio”, significam que, por exemplo:
# “A depender da entrada, o algoritmo pode executar em O(1) ou O(n)
# ou outras complexidades mistas.“.
# o algoritmo acima, por exemplo, para entradas muito grandes, é O(n).
# O que acontece, porém, caso tenha sorte e o número que procuro seja o primeiro do array?
# Resposta: Nesse caso, mesmo para uma entrada infinita, a complexidade será O(1).
# Esse é o melhor caso desse algoritmo.
#
# De forma análoga, o pior caso é o número ser o último elemento do array, ou seja O(n).

# E o caso médio? 🤔
# Resposta: Seria algo como O(n * 1/2), por exemplo. Nesse caso, o número que procuro está no meio da lista.
# Mas, para entradas muito grandes, devo desprezar os números menos relevantes da soma,
# então, posso simplificar e dizer que o caso médio é O(n) também.

# Diferentes algoritmos têm diferentes cenários de melhor caso, pior caso e caso médio. Veremos vários exemplos disso ao longo das próximas seções.
