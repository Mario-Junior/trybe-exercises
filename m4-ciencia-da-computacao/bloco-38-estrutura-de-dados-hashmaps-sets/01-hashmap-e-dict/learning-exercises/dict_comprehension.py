# Exercício 5: Criar dicionário chamado 'dict comprehension'
# que mapeia inteiros de 3 a 20 para o seu dobro.

double = {i: i*2 for i in range(3, 21)}
print(f"Todos duplicados: {double}")

# Exercício 7: Utilizando o dicionário criado no exercício 5.
# Para as chaves ímpares, mapear o triplo.
# Consulte o método keys() e atualize o dicionário para a nova regra.

for key in double.keys():
    if key % 2 != 0:
        double[key] = key * 3

print(f"Ímpares triplicados: {double}")
