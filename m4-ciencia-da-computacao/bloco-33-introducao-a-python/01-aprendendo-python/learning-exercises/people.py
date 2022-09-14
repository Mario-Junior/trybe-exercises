import geometric_area as area  # forma de importar um módulo e ainda apelidá-lo
from geometric_area import square  # outra forma de importação de funções


PEOPLE_PER_SQUARE_METER = 2  # número de pessoas por m² em média
FIELD_LENGTH = 60  # em metros
FIELD_WIDTH = 20  # em metros


people_at_concert = (
    area.rectangle(FIELD_LENGTH, FIELD_WIDTH) * PEOPLE_PER_SQUARE_METER
)


print("Estão presentes no show, cerca de", people_at_concert, "pessoas.""\n")
print("Teste de impressão de área de um quadrado:", square(FIELD_LENGTH))
