# Posso instanciar set vazio ou inicializar com valores de um objeto
# iterável, como uma lista
conjuntoA = set()

# Ao inicializar com valores de uma lista, os valores duplicados serão
# desconsiderados e a ordem de inserção será perdida.
conjuntoB = set([1, 1, 2, 3, 3, 3])

# Add - adiciona o elemento ao conjunto
conjuntoA.add(5)
conjuntoA.add(3)
conjuntoA.add(0)

# sets admitem objetos mistos. Ou seja, admitem ter _strings_ com _ints_
# dentro de um mesmo objeto, por exemplo.
conjuntoA.add("elemento")

# Tenho 2 jeitos de remover elementos:
# - remove() causa erro caso o elemento não esteja no set;
# - discard() não causa erro caso o elemento não esteja no set.

# Não vai dar erro
conjuntoB.remove(3)

# Vai dar erro pois já removi esse elemento e set não guarda duplicatas
# conjuntoB.remove(3)  # DESCOMENTAR para ver o erro!

# Não vai dar erro
conjuntoB.discard(3)

# Pop - remove e retorna um elemento aleatório do set
# - set é um objeto iterável, mas não conseguimos garantir em que ordem os
#   elementos serão acessados.
# - A função pop () é útil quando quero trabalhar com algum elemento do
#   set, mas não sei de antemão quais elementos estão dentro dele.
some_element = conjuntoA.pop()

# clear() remove todos os itens do set
conjuntoB.clear()

# Consulta
# A consulta é feita com o operador "in"
if 2 in conjuntoA:
    print("2 está em A")

if 7 not in conjuntoA:
    print("7 não está em A")
