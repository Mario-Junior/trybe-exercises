def merge_sort(numbers, start=0, end=None):
    if end is None:
        end = len(numbers)
    if (end - start) > 1: # se não reduzi o suficiente, continua
        mid = (start + end) // 2 # encontrando o meio
        merge_sort(numbers, start, mid) # dividindo as listas
        merge_sort(numbers, mid, end)
        merge(numbers, start, mid, end) # unindo as listas

# função auxiliar que realiza a mistura dos dois arrays

def merge(numbers, start, mid, end):
    left = numbers[start:mid] # indexando a lista da esquerda
    right = numbers[mid:end] # indexando a lista da direita

    left_index, right_index = 0, 0 # as duas listas começarão do início

    for general_index in range(start, end): # percorrer sobre a lista inteira como se fosse uma
        if left_index >= len(left): # se os elementos da esquerda acabaram, preenche o restante com a lista da direita 
            numbers[general_index] = right[right_index]
            right_index = right_index + 1
        elif right_index >= len(right): # se os elementos da direita acabaram, preenche o restante com a lista da esquerda
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        elif left[left_index] < right[right_index]: # se o elemento do topo da esquerda for menor que o da direita, ele será o escolhido
            numbers[general_index] = left[left_index]
            left_index = left_index + 1
        else:
            numbers[general_index] = right[right_index] # caso o da direita seja menor, ele será o escolhido
            right_index = right_index + 1


numbers = [6, 5, 3, 1, 8, 7, 2, 4]
merge_sort(numbers, 0, len(numbers))
print(numbers)
