def binary_search(numbers, target):
    # definir os índices
    start = 0
    end = len(numbers) - 1

    while (
        start <= end
    ):  # os índices podem ser no máximo iguais, o início não pode ultrapassar o fim
        mid = (start + end) // 2  # encontro o meio

        if (
            numbers[mid] == target
        ):  # se o elemento do meio for o alvo, devolve a posição do meio
            return mid

        if (
            target < numbers[mid]
        ):  # se o elemento for menor, atualiza o índice do fim
            end = mid - 1
        else:  # caso contrário, atualiza o índice do inicio
            start = mid + 1

    return -1  # Não encontrou? Retorna -1


def logarithmic_complexity_two_arrays(array1, array2):
    for item in array1:
        result = binary_search(array2, item)
        print(f"Elemento encontrado na posição: {result}")


array1 = [1, 2, 3, 4, 5]
array2 = [2, 3, 4, 10, 40]

logarithmic_complexity_two_arrays(array1, array2)
# ordem de complexidade do algoritmo resultante é O(n * log n), ou O(n log n).
