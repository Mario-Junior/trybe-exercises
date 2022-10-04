import requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com"
page = requests.get(url)
html_content = page.text

# Cria uma instância do objeto Beautiful Soup e usa o parser de HTML nativo
# do Python
soup = BeautifulSoup(html_content, "html.parser")


# Utiliza o método prettify para melhorar a visualização do conteúdo
print(soup.prettify())

# acessando a tag 'title'
title = soup.title

# retorna o elemento HTML da tag
print(title)

# o tipo de 'title' é tag
print(type(title))

# o nome de 'title' é title
print(title.name)

# acessando a tag 'footer'
footer = soup.footer

# acessando o atributo classe da tag footer
print(footer["class"])

# Acessando a string de uma tag
print(title.string)

# Verificando o tipo dessa string
print(type(title.string))

# Imprime todas as ocorrências da tag "p" da página ou uma lista vazia,
# caso nenhum elemento corresponda a pesquisa
print(soup.find_all("p"))

# Imprime o elemento com o id especificado ou "None",
# caso nenhum elemento corresponda a pesquisa
print(soup.find(id="quote"))

# Imprime todo o texto da página
print(soup.get_text())

# Imprime todas as "divs" que possuam a classe "quote" ou uma lista vazia,
# caso nenhum elemento corresponda a pesquisa
print(soup.find_all("div", {"class": "quote"}))
