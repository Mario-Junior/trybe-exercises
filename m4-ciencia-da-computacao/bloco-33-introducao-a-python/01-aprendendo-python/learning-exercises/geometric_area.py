PI = 3.14


def square(side):
    """Calculate area of square"""
    return side * side


def rectangle(length, width):
    """Calculate area of rectangle"""
    return length * width


def circle(radius):
    """Calculate area of circle"""
    return PI * radius ** 2


if __name__ == "__main__":
    print(f'{square.__doc__}:', square(12))
    print(f'{rectangle.__doc__}:', rectangle(3, 4))
    print(f'{circle.__doc__}:', circle(6))
    # print(f'{square.__doc__}\n{rectangle.__doc__}\n{circle.__doc__}')
