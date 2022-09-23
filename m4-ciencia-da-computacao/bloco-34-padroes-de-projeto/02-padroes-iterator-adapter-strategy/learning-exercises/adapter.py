class ReportAnalyzer:
    def __init__(self, loader):
        self.loader = loader

    def average(self):
        # este é um dos métodos que espera uma lista de dicionários
        data = self.loader.load_data()
        # aqui ela soma o valor na chave final_price em cada item da lista
        total = sum(order["final_price"] for order in data)
        return total / len(data)


# Código exemplo para simular a API Gerenciator3000
class ReportLoader:
    def __init__(self):
        self.headers = ["id", "date", "final_price"]
        self.rows = [
            [1337, "2020-11-20", 2350.5],
            [1338, "2020-11-21", 4800.5],
        ]


loader = ReportLoader()
print(loader.headers)  # ['id', 'date', ..., 'final_price']
print(loader.rows[0])  # [1337, '2020-11-20', ..., 2350.5]
print(loader.rows[1])  # [1337, '2020-11-20', ..., 2350.5]


class G3000LoaderAdapter:
    # aqui o loader é uma instância do gerenciator3000.ReportLoader original
    def __init__(self, loader):
        self.loader = loader

    def load_data(self):

        # Em python, o zip() junta uma lista de chaves em uma lista de valores
        # e permite criar dicionário! Por exemplo:
        # dict(zip(['nome', 'idade'], ['Juliana', 27]))
        # {'nome': 'Juliana', 'idade': 27}

        data = []
        for row in self.loader.rows:
            data.append(dict(zip(self.loader.headers, row)))
        return data


g3000_loader = G3000LoaderAdapter(loader)
# o analyzer do nosso sistema recebe o adaptador como qualquer outro loader
analyzer = ReportAnalyzer(g3000_loader)
print(f"A média de preços é: {analyzer.average()}")  # Agora funcionará
