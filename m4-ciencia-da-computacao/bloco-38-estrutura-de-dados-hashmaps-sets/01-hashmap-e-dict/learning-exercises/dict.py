# Instanciando a classe Dict
employee_registry = {}

# Inserindo dados
# objeto[chave] = valor
employee_registry[14] = "name1"
employee_registry[23] = "name2"
employee_registry[10] = "name3"
employee_registry[9] = "name4"
print(employee_registry)

# Alterando o nome do id 10
# objeto[chave] = novo_valor
employee_registry[10] = "name30"
print(f"Novo valor do id 10, após a atualização: {employee_registry[10]}")


# Instanciação do objeto vazio
dict1 = {}
dict2 = dict()

# Instanciação com preenchimento inicial de dados
dict3 = {1: 'name1', 2: 'name2'}
print(f"Dicionário 1: {dict1}")
print(f"Dicionário 2: {dict2}")
print(f"Dicionário 3: {dict3}")

# Inserção e Alteração
# Se a chave não existir no dict, uma nova entrada será criada
# Se já existir, o valor será sobreposto
dict1[14] = 'name1'
print(f"Novo dicionário 1, pós inserção/alteração: {dict1}")

# Consulta e Remoção
# Se a chave não existir no dict, causa erro
name = dict1[14]
del dict1[14]
print(f"Dicionário 1 pós consulta e deleção: {dict1}")
