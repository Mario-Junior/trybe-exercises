def predecessor_recursive_sum(n):
    if n == 0:
        return 0
    else:
        return n + predecessor_recursive_sum(n - 1)


print(f"Resultado: {predecessor_recursive_sum(4)}")
