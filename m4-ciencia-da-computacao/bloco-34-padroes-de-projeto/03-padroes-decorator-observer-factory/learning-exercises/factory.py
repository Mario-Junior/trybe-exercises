from abc import ABC, abstractmethod


class Item(ABC):
    @abstractmethod
    def __repr__(self):
        # __repr__ é o método que o Python chama quando faço print() do objeto
        pass


class Combo(ABC):
    def __init__(self):
        self.items = []
        self.criar_combo()

    @abstractmethod
    def criar_combo():
        pass

    def exibe_itens(self):
        return self.items

    def adicionar_itens(self, item):
        self.items.append(item)


class ItemHamburger(Item):
    def __repr__(self):
        return "Hamburguer"


class ItemRefrigerante(Item):
    def __repr__(self):
        return "Refrigerante"


class ItemSorvete(Item):
    def __repr__(self):
        return "Sorvete"


class ItemFritas(Item):
    def __repr__(self):
        return "Fritas"


class ComboTudo(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemSorvete())
        self.adicionar_itens(ItemFritas())
        self.adicionar_itens(ItemRefrigerante())


class ComboFeliz(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemFritas())
        self.adicionar_itens(ItemRefrigerante())


class ComboGelado(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemSorvete())


class ComboFritas(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemFritas())


if __name__ == "__main__":
    combo_escolhido = input(
        "Olá, qual seu pedido? "
        "[ComboTudo, ComboFeliz, ComboGelado, ComboFritas]: "
    )

    # Para transformar string em código executável basta usar o método eval()
    # Equivalente a chamar ComboTudo(), ComboFeliz(), ComboGelado()
    combo = eval(combo_escolhido)()

    print(f"\nCriando o combo {type(combo).__name__}.")
    print(f"Combo fabricado com os seguintes itens: {combo.exibe_itens()}")
