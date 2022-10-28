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

    # insert
    # Para povoar a hash, recebo o objeto,
    # computo o seu address a partir da chave numérica,
    # armazeno no local adequado.
    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    # get_value
    # Para acessar o dado de interesse, passo a chave.
    # A classe identifica o índice, onde a referência ao objeto está armazenada
    # e retorna o valor que estiver no campo name.
    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    # has
    # Para consultar se uma determinada chave existe dentro da hash map,
    # basta calcular o address. Além disso,
    # certifico que o conteúdo da lista buckets não é None.
    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    # Exercício 2:
    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        employee = self._buckets[address]
        employee.name = new_name


# Exercício 1: b) Use a entrada abaixo para criar objetos Employee:
employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
# Exercício 1: c) Instancie classe HashMap e use objetos Employee para povoá-la
# Imprima na tela o nome da pessoa de id_num = 23,
# acessando a informação a partir da HashMap.
employee_list = HashMap()

for id_num, name in employees:
    new_employee = Employee(id_num, name)
    employee_list.insert(new_employee)

print(employee_list.get_value(23))

# Exercício 2: A pessoa de id_num = 10 está com nome errado, deveria ser name30
# Implemente método update, onde id_num é a chave para localizar o registro
# e new_name é o nome a ser colocado.
# Verifique se o seu código está realmente alterando o nome,
# imprimindo o nome antes e depois da alteração:
print(employee_list.get_value(10))
employee_list.update_value(10, "name30")
print(employee_list.get_value(10))
