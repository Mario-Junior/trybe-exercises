import time
from timeit import timeit

def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


# meu_array = [1, 2, 3, 4, 5]

n = 101 # onde n será o número total de elementos dentro do array
meu_array = list(range(1, n))

# start_at = time.time()
multiply_arrays(meu_array, meu_array)
# end_at = time.time()
# print("Tempo de execução: ", end_at - start_at)
