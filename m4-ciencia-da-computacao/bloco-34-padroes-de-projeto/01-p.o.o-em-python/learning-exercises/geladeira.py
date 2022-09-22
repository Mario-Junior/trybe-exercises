from eletrodomestico import Eletrodomestico


class Geladeira(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco, qtde_portas=1):
        super().__init__(cor, potencia, voltagem, preco)
        # sobrescrita de método da classe mãe
        self.qtde_portas = qtde_portas
        # removendo código não mais necessário, daqui
        # self.preco = preco
        # self.__cor = cor
        # self.__potencia = potencia
        # self.__voltagem = voltagem
        # self.__ligado = False

    # @property
    # def cor(self):
    #     return self.__cor
    

#     def __str__(self):
#         return f"""
# - Geladeira {self.cor}
# - Potência: {self.__potencia} watts
# - Voltagem: {self.__voltagem} volts
# - Preço: R${self.preco:,.2f}
#         """
    # até aqui !

geladeira_branca = Geladeira("Branca", 250, 220, 1000)

print(geladeira_branca)
