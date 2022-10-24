from stack import Stack


def solve_expression(expr):
    stack = Stack()

    tokens_list = expr.split(" ")
