class Calculadora:
    def soma(self, x, y):
        return x + y


class CalculadoraDecorada:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def converterNumero(self, numero):
        if not isinstance(numero, str):
            return numero

        # Neste cenário, em vez de fazer if/else... Posso usar o dicionário
        # Consigo acessar e obter o valor a partir da chave
        return {
            "um": 1,
            "dois": 2,
            "três": 3,
            "quatro": 4,
            "cinco": 5,
            "seis": 6,
            "sete": 7,
            "oito": 8,
            "nove": 9,
            "dez": 10,
        }.get(numero)

    def soma(self, x, y):
        return self.calculadora.soma(
            self.converterNumero(x), self.converterNumero(y)
        )


class CalculadoraDecoradaIngles:
    def __init__(self, calculadora):
        self.calculadora = calculadora

    def converterNumero(self, numero):
        if not isinstance(numero, str):
            return numero

        return {
            "one": 1,
            "two": 2,
            "three": 3,
            "four": 4,
            "five": 5,
            "six": 6,
            "seven": 7,
            "eight": 8,
            "nine": 9,
            "ten": 10,
        }.get(numero)

    def soma(self, x, y):
        return self.calculadora.soma(
            self.converterNumero(x), self.converterNumero(y)
        )


if __name__ == "__main__":
    calculadora = Calculadora()
    print("10 + 2 =")
    calculadora.soma(10, 2)  # Saída = 12

    calculadoraDecorada = CalculadoraDecorada(calculadora)
    print("'oito' + 'quatro' =", calculadoraDecorada.soma("oito", "quatro"))
    # Saída = 12

    calculadoraDecoradaIngles = CalculadoraDecoradaIngles(calculadora)
    print(
        "'four' + 'eight' =", calculadoraDecoradaIngles.soma("four", "eight")
    )
    # Saída = 12
