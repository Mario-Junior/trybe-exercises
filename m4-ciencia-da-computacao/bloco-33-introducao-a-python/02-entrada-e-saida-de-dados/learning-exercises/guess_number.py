import random


# Observação:
valor = input("Digite qualquer coisa:")
print(type(valor))  # Atenção: saída padrão é str = string
# Mesmo se for passado um número!!!


random_number = random.randint(1, 10)  # escolhe número aleatório entre 1 e 10
guess = ""


while guess != random_number:  # enquanto não adivinhar o número
    # segue perguntando o número esperado a pessoa usuária
    guess = int(input("Qual o seu palpite?"))


print("O número sorteado era: ", guess)  # imprime o resultado quando acertado!
