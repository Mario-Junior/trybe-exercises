def factorial(n):
    if n == 1: # caso base
        return 1
    else:
        return n * factorial(n - 1) # caso recursivo

n = 5
print(f"factorial({n}) = {factorial(5)}")
