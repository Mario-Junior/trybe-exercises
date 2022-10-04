import requests
from bs4 import BeautifulSoup


# Acessa uma URL e retorna um objeto do Beautiful Soup
def get_html_soup(url):
    page = requests.get(url)
    html_page = page.text

    soup = BeautifulSoup(html_page, "html.parser")
    soup.prettify()
    return soup


# Recebe um objeto soup e retorna informações das notícias de uma página
def get_page_news(soup):

    # Define uma lista vazia a ser populada com os dados do scraping
    news = []

    # Percorre todos os elementos da tag 'article' com a classe especificada
    for post in soup.find_all(
        "article", {"class": "tec--card tec--card--medium"}
    ):

        # Cria um dicionário para guardar os elementos a cada iteração
        item = {}

        # Cria um item chamado tag no dicionário para guardar a tag do post
        # Primeiro pesquisa pela div com a classe específica
        # Depois pela tag 'a' dentro dos resultados do primeiro filtro
        # Por fim, traz o resultado da string dentro da tag a
        item["tag"] = post.find("div", {"class": "tec--card__info"}).a.string

        # Mesma lógica da busca anterior
        item["title"] = post.find("h3", {"class": "tec--card__title"}).a.string

        # Parecido com o que foi feito anteriormente, mas dessa vez pega
        # o atributo 'href' dentro da tag 'a'
        item["link"] = post.find("h3", {"class": "tec--card__title"}).a["href"]

        # Mesma lógica da primeira busca, mas trazendo a string dentro da 'div'
        # direto
        item["date"] = post.find(
            "div", {"class": "tec--timestamp__item z--font-semibold"}
        ).string

        # Mesma lógica da busca anterior
        item["time"] = post.find(
            "div", {"class": "z--truncate z-flex-1"}
        ).string

        # Adiciona os itens criado no dicionário à lista 'news'
        news.append(item)

    return news


# print(get_page_news(get_html_soup("https://www.tecmundo.com.br/novidades")))


# Recebe um objeto soup e retorna o link que redireciona
# para a página seguinte, caso ele exista
def get_next_page(soup_page):
    try:

        # Busca pela tag 'a' com as classes específicas do link desejado
        return soup_page.find(
            "a",
            {"class": "tec--btn"},
        )["href"]
    except TypeError:
        return None


# Recebe uma URL e retorna uma lista com todas as notícias do site
def scrape_all(url):
    all_news = []

    # Enquanto a pesquisa pelo link que vai para a página seguinte existir
    while get_next_page(get_html_soup(url)) is not None:

        # Imprime a URL da página seguinte
        print(get_next_page(get_html_soup(url)))

        # Adiciona os elementos da lista com as notícias de cada
        # página na lista 'all_news'
        all_news.extend(get_page_news(get_html_soup(url)))

        # define a página seguinte como URL para a próxima iteração
        url = get_next_page(get_html_soup(url))

    return all_news


# Vamos começar perto das últimas páginas pra não ter que fazer a requisição
# do site inteiro
print(scrape_all("https://www.tecmundo.com.br/novidades?page=11294"))
