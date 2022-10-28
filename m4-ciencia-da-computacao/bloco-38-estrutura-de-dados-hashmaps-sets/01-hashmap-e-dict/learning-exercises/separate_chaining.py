class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


# Hash Function
class HashMap:
    # Buckets
    # O que fazer para alterar essa implementação?
    # A lista buckets não seria mais uma lista. Seria uma lista de listas.
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    # Considerando que as chaves são inteiros, uso operação mod 10,
    # ou resto da divisão inteira por 10, para definir o índice.
    # Cada número que entra vai resultar em um endereço de 0 a 9.
    # O valor 10 foi escolhido por não ser muito grande.
    # Tanto a operação mod como o valor 10 são escolhas ilustrativas (exemplo).
    def get_address(self, id_num):
        return id_num % 10

    # insert
    def insert(self, employee):
        address = self.get_address(employee.id_num)
        # A inserção, em vez de apenas colocar o objeto no endereço,
        # precisa adicionar à lista que está nesse endereço.
        self._buckets[address].append(employee)

    # get_value
    # Após obter o endereço, itero sobre a lista
    # até encontrar o item com o id_num procurado e retornar o nome.
    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    # Preciso Implementar!!!
    # # has
    # def has(self, id_num):
    #     address = self.get_address(id_num)
    #     return self._buckets[address] is not None

    # # Exercício 2:
    # def update_value(self, id_num, new_name):
    #     address = self.get_address(id_num)
    #     employee = self._buckets[address]
    #     employee.name = new_name


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

# Preciso Implementar!!!
# Exercício 2: A pessoa de id_num = 10 está com nome errado, deveria ser name30
# # Implemente método update, onde id_num é a chave para localizar o registro
# # e new_name é o nome a ser colocado.
# # Verifique se o seu código está realmente alterando o nome,
# # imprimindo o nome antes e depois da alteração:
# print(employee_list.get_value(10))
# employee_list.update_value(10, "name30")
# print(employee_list.get_value(10))
