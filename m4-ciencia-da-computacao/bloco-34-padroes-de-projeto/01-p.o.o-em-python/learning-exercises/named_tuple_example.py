from collections import namedtuple


Geo_Point = namedtuple("Geo_Point", "latitude longitude")
location = Geo_Point(-22.81711234090266, -47.069559317039655)
print(location.latitude)
# Posição do item nomeada na tupla ao invés de apenas location[0]
