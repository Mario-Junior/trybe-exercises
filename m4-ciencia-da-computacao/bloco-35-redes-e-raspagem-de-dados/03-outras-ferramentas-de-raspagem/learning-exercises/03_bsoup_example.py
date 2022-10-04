import requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com"
page = requests.get(url)
html_content = page.text

# Cria uma instância do objeto Beautiful Soup e usa o parser de HTML nativo
# do Python
soup = BeautifulSoup(html_content, "html.parser")

# acessando a tag 'title'
title = soup.title

# Utiliza o método prettify para melhorar a visualização do conteúdo
print(soup.prettify())
