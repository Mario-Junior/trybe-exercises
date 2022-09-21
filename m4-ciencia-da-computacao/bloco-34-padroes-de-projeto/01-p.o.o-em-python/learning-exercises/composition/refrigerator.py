class Refrigerator:
    def __init__(self, color, capacity, voltage, price):
        self.price = price
        self.__color = color
        self.__capacity = capacity
        self.__voltage = voltage
        self.__ligada = False
        self.__temperatura = 0

    # Getter
    @property
    def voltage(self):
        return self.__voltage

    # Setter
    @voltage.setter
    def voltage(self, new_voltage):
        self.__voltage = new_voltage


refrigerator = Refrigerator("Steel", "500", 220, 3990)


# print(f"A voltagem atual é {refrigerator.__voltage}")
# Saída = AttributeError: 'Refrigerator' object has no attribute '__voltage'
print(f"A voltagem atual é {refrigerator.voltage} volts")
refrigerator.voltage = 127
print(f"Após atualização, a nova voltagem é {refrigerator.voltage} volts")
