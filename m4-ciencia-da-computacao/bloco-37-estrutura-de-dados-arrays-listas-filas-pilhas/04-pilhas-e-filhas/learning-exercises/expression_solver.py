from stack import Stack


def solve_expression(expr):
    stack = Stack()

    tokens_list = expr.split(" ")
    for token in tokens_list:
        if token == "+":
            # Sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        else:
            # add number operation
            stack.push(int(token))
