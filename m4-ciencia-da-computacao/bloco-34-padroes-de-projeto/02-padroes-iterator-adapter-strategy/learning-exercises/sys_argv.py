import sys
from operator import add, sub

FUNCS = {"soma": add, "subtrai": sub}

try:
    _, func, n1, n2 = sys.argv
    n1, n2 = int(n1), int(n2)
    result = FUNCS[func](n1, n2)
except ValueError:
    print(
        "Argumentos de entrada incorretos, "
        "experimente python 'arquivo.py' soma 6 6",
        file=sys.stderr,
    )
except KeyError:
    avaliable_functions = ", ".join(FUNCS.keys())
    print(f"Função indisponível, tente uma destas: {avaliable_functions}")
else:
    print(f"O resultado da operação {func} foi {result}")

# opcao = 1  # descomentar para a função de looping rodar, caso precise
opcao = 0
while opcao != 0:
    n1 = int(input("Digite um número: "))
    n2 = int(input("Digite outro número: "))
    opcao = int(
        input(
            """
Escolha uma opção:
1 - soma
2 - subtração
0 - sair
"""
        )
    )
    if opcao == 1:
        print(n1 + n2)
    elif opcao == 2:
        print(n1 - n2)
