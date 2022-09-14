PI = 3.14


def square(side):
    "Calculate area of square"
    return side * side


def rectangle(length, width):
    "Calculate area of rectangle"
    return length * width


def circle(radius):
    "Calculate area of circle"
    return PI * radius ** 2


if __name__ == "__main__":
    print("Área do quadrado:", square(12))
    print("Área do retângulo:", rectangle(3, 4))
    print("Área do círculo:", circle(6))
