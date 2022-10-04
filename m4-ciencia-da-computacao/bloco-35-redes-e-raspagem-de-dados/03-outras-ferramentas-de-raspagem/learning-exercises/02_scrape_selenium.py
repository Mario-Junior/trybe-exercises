from selenium import webdriver

# Importa o By
from selenium.webdriver.common.by import By

from selenium.common.exceptions import NoSuchElementException

# DESCOMENTAR para visualizar 1
# # quando não preciso ou não quero ver a execução do navegador
# # posso evitá-la, utilizando as options
# # Basta importá-las do webdriver
# # adicionar um novo argumento com a opção que desejo
# # depois passá-la como parâmetro para a instância de navegador criada.

# # Importa a classe 'Options' do browser
# from selenium.webdriver.firefox.options import Options


firefox = webdriver.Firefox()

# DESCOMENTAR para visualizar 2
# # Instancia um objeto da classe 'Options'
# options = Options()
# # Adiciona um argumento passando o parâmetro '--headless'
# options.add_argument('--headless')
# # Define que a instância do navegador deve usar as options definidas
# firefox = webdriver.Firefox(options=options)


# Define a função que fará o scrape da URL recebida
def scrape(url):
    firefox.get(url)

    books = []

    # Itera entre os elementos com essa classe
    for book in firefox.find_elements(By.CLASS_NAME, "product_pod"):
        # Cria dict vazio para guardar os elementos capturados
        new_item = {}

        # Cria uma chave 'title' no dict que vai receber o resultado da busca
        # O título está em uma tag anchor que está dentro de uma tag 'H3'
        new_item["title"] = (
            book.find_element(By.TAG_NAME, "h3")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )

        # O preço do book está em um elemento da classe 'entry-excerpt'
        new_item["price"] = book.find_element(
            By.CLASS_NAME, "price_color"
        ).get_attribute("innerHTML")

        # O link está dentro de um atributo 'href'
        new_item["link"] = (
            book.find_element(By.CLASS_NAME, "image_container")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        books.append(new_item)
    return books


firefox.get("https://books.toscrape.com/")

all_books = []
url2request = "https://books.toscrape.com/"

# Cria uma variável com o seletor que captura o link do botão de passar para
# a próxima página
next_page_link = firefox.find_element(By.CLASS_NAME, "next").get_attribute(
    "innerHTML"
)

# Enquanto este botão de 'next' existir na página ele irá iterar
while next_page_link:

    # Usa o método extend para colocar todos os elementos de uma lista dentro
    # de outra
    all_books.extend(scrape(url2request))
    try:
        url2request = (
            firefox.find_element(By.CLASS_NAME, "next")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )
    except NoSuchElementException:
        print("Exception handled")
        break

print(all_books)
