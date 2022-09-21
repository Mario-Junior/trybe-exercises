class Geladeira:
    def __init__(self, cor, potencia, voltagem, preco):
        self.preco = preco
        self.__cor = cor
        self.__potencia = potencia
        self.__voltagem = voltagem
        self.__ligado = False

    @property
    def cor(self):
        return self.__cor

    def __str__(self):
        return f"""
- Geladeira {self.cor}
- Potência: {self.__potencia} watts
- Voltagem: {self.__voltagem} volts
- Preço: R${self.preco:,.2f}
        """


geladeira_branca = Geladeira("Branca", 250, 220, 1000)

print(geladeira_branca)
