"""Há uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""

import sys


class ListaArray:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        # recupera o elemento no índice informado
        return self.data[index]

    def set(self, index, value):
        # insere um elemento no índice informado
        self.data.insert(index, value)

    def remove(self, index):
        # removo o item, retornando-o
        return self.data.pop(index)

    def update(self, index, value):
        self.data[index] = value


# inicializando e preenchendo uma estrutura de dados array
array = ListaArray()

array_memory_size = sys.getsizeof(array.data)
print(array)
print(array_memory_size)

array.set(0, "Felipe")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")

# para acessar um elemento do array, utilizo seu índice
print(array.get(0))  # saída: Felipe
print(array.get(2))  # saída: Shirley
print("-----")

# posso iterar sobre os elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1

# sys.getsizeof retorna o tamanho da lista em bytes
array.set(0, "Marcos")
array.set(1, "Patrícia")
# quando começamos as inserções o valor muda
array_memory_size = sys.getsizeof(array.data)
print(array_memory_size)
print(array)
array.remove(0)  # retorna a string "Marcos"
print(array)

array.update(2, 'Duda')
print(array)
