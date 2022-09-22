from eletrodomestico import Eletrodomestico


class Microondas(Eletrodomestico):
    def __init__(self, cor, potencia, voltagem, preco):
        super().__init__(cor, potencia, voltagem, preco)


microondas = Microondas("Aço escovado", 1000, 220, 299.90)
print(f"O preço do Microondas é: R${microondas.preco:,.2f}")
