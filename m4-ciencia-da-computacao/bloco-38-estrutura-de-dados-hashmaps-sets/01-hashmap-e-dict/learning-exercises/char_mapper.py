# Exercício 6: dada uma string,
# construir dicionário com a contagem de cada caractere.
# Utilizar o pseudocódigo e o exemplo abaixo para nortear.

# Para cada char na string:
# 	- Se o char não estiver no dicionário, inclua com o valor 1;
# 	- Se estiver, incremente o valor.

# Exemplo:

str = "bbbbaaaacccaaaaaaddddddddccccccc"
# saída: {'b': 4, 'a': 10, 'c': 10, 'd': 8}

str = "coxinha"
# saída: {'c': 1, 'o': 1, 'x': 1, 'i': 1, 'n': 1, 'h': 1, 'a': 1}
# Explicação: Nenhuma letra repete em coxinha :)

count_chars = {}
string = "bbbbaaaacccaaaaaaddddddddccccccc"

for char in string:
    if char not in count_chars:
        count_chars[char] = 1
    else:
        count_chars[char] += 1

print(count_chars)
