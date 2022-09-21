from liquidificador import Liquidificador
from geladeira import Geladeira


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None
        self.geladeira = None

    def comprar_liquidificador(self, liquidificador: Liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    def comprar_geladeira(self, geladeira: Geladeira):
        if geladeira.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= geladeira.preco
            self.geladeira = geladeira

    def __str__(self):
        if (self.geladeira):
            return f"{self.nome} - possui uma geladeira."
        return f"{self.nome} - não possui uma geladeira."


pessoa_cozinheira = Pessoa("Jacquin", 1000)
liquidificador_vermelho = Liquidificador("Vermelho", 110, 127, 200)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)

print(pessoa_cozinheira)
