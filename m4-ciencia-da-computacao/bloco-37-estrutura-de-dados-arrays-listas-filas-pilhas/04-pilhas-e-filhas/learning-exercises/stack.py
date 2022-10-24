class Stack:
    def __init__(self):
        self._data = list()

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None

        # -1 se refere ao último objeto da pilha.
        # Ou seja, o valor do topo da pilha
        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self):
        if self.is_empty():
            return None
        value = self._data[-1]
        return value

    def clear(self):
        self._data.clear()

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Stack(" + str_items + ")"


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Stack()

    for elem in elements:
        content_stack.push(elem)

    print(content_stack)
    # saída: Stack(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    print(content_stack.size())
    # saída: 10

    print(content_stack.peek())
    # saída: 10
    print(content_stack.pop())
    # saída: 10, pois a função retorna o elemento que está sendo retirado

    print(content_stack.peek())
    # saída: 9, pois, após o 10 ter sido removido,
    # o 9 se tornou o elemento do topo da pilha
    print(content_stack.size())
    # saída: 9

    print(content_stack.clear())
    # saída: None, pois a função não retorna nada!
    print(content_stack.size())
    # saída: 0
