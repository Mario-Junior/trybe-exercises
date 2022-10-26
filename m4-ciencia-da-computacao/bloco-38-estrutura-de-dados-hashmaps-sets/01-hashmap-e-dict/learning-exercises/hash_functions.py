class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


# Hash Function
class HashMap:
    # Buckets
    # Como a hash function resulta em endereços de 0 a 9,
    # uma lista com 10 posições é suficiente.
    # Inicializo a lista já do tamanho que preciso, preenchida com None.
    # Não posso preencher com valor numérico, como por exemplo -1,
    # pois isso causaria ambiguidade, afinal, se quero guardar o valor -1,
    # não dá pra saber se é o valor ou um indicativo de que bucket está vazio.
    # A lista buckets, é um atributo da classe HashMap.
    def __init__(self):
        self._buckets = [None for i in range(10)]

    # Considerando que as chaves são inteiros, uso operação mod 10,
    # ou resto da divisão inteira por 10, para definir o índice.
    # Cada número que entra vai resultar em um endereço de 0 a 9.
    # O valor 10 foi escolhido por não ser muito grande.
    # Tanto a operação mod como o valor 10 são escolhas ilustrativas (exemplo).
    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name
