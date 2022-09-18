numbers = input("Digite, por favor, vários números separados por espaços: ")
numbers_list = numbers.split(' ')
sum = 0
# print(numbers_list)


for num in numbers_list:
    if not num.isdigit():
        print(f'Erro ao somar valores, {num} é um valor inválido')
    else:
        sum += int(num)


print('A soma dos valores válidos é:', sum)
