import refrigerator


class Person:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
        self.refrigerator = None

    def buy_refrigerator(self, refrigerator: refrigerator.Refrigerator):
        if refrigerator.price <= self.balance:
            self.balance -= refrigerator.price
            self.refrigerator = refrigerator

    def __str__(self):
        if self.refrigerator is not None:
            return f"{self.name} possui uma geladeira."
        return f"{self.name} não possui uma geladeira."


person = Person("Sil", 10000)
refrigerator_steel = refrigerator.Refrigerator("Steel", "500", 220, 3990)
person.buy_refrigerator(refrigerator_steel)


print(f"{person} E tem saldo em conta de R$ {person.balance:,.2f}")
