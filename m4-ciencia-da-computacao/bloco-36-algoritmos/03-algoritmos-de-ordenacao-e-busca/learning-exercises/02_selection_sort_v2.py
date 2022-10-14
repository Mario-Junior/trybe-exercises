def search(numbers, start, end):
    min_element = numbers[start]
    min_element_index = start

    for i in range(start + 1, end): # Busca pelo menor elemento
        if numbers[i] < min_element:
            min_element = numbers[i]
            min_element_index = i

    return min_element_index # Retorna a posição do menor elemento

def selection_sort(numbers):
    n = len(numbers)

    for index in range(n - 1): # Início da iteração para ordenar os N-1 elementos
        min_element_index = search(numbers, index, n)
        numbers[index], numbers[min_element_index] = numbers[min_element_index], numbers[index] # Trocando os elementos utilizando desempacotamento.

    return numbers

numbers_list = [7, 5, 9, 2, 6, 8]
print(f"Lista inicial: {numbers_list}")
ordered_numbers = selection_sort(numbers_list)
print(f"Lista final: {ordered_numbers}")
