import requests
from parsel import Selector


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
print(selector)


# O título está no atributo title em um elemento âncora (<a>)
# Dentro de um h3 em elementos que possuem classe product_pod
titles = selector.css(".product_pod h3 a::attr(title)").getall()
# Estamos utilizando a::attr(title) para capturar somente o valor
# contido no texto do seletor

# Os preços estão no texto de uma classe price_color
# Que se encontra dentro da classe .product_price
prices = selector.css(".product_price .price_color::text").getall()

# Combinando tudo podemos buscar os produtos
# em em seguida buscar os valores individualmente
for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print(title, price)
