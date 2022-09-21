class Home_Appliance:
    def __init__(self, color, potency, voltage, price):
        self.price = price
        self.__color = color
        self.__potency = potency
        self.__voltage = voltage
        self.__is_on = False
        self.__motor_amperage = 0

    def turn_on(self, velocity):
        self.__velocity = velocity
        self.__motor_amperage = (
            (self.__potency / self.__voltage) / self.__max_velocity
        ) * velocity
