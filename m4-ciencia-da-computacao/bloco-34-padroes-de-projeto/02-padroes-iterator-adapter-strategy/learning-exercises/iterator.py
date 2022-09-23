lista = [1, 2, 3, 4, 5, 6]

objeto_iterador = iter(lista)

print(
    f""""
{next(objeto_iterador)}
{next(objeto_iterador)}
{next(objeto_iterador)}
{next(objeto_iterador)}
{next(objeto_iterador)}
{next(objeto_iterador)}
    """
)
