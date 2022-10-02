from abc import ABC, abstractmethod


class Perfil:
    def __init__(self):
        self.__sistemas_de_notificacao = []
        self.__new_post = None

    def adicionar_sistema_de_notificacao(self, sistema):
        self.__sistemas_de_notificacao.append(sistema)

    def notificar_todos(self):
        for sistema in self.__sistemas_de_notificacao:
            sistema.notificar()

    def adicionar_post(self, post):
        self.__new_post = post
        self.mostrar_post()
        self.notificar_todos()

    def mostrar_post(self):
        print(f"\nPost: {self.__new_post}\n")


# Interface Observer
class Notificador(ABC):
    @abstractmethod
    def notificar(self):
        pass


# Observador Mensagem
class NotificadorMensagem(Notificador):
    def __init__(self, perfil, seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Notificando via Mensagens: {self.seguidores}")


# Observador Push Notification
class NotificadorPushNotification(Notificador):
    def __init__(self, perfil, seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Disparando Push Notification para: {self.seguidores}")


# Observador Email
class NotificadorEmail(Notificador):
    def __init__(self, perfil, seguidores):
        self.perfil = perfil
        self.seguidores = seguidores
        self.perfil.adicionar_sistema_de_notificacao(self)

    def notificar(self):
        print(f"Disparando Email's para: {self.seguidores}")


# Cliente
if __name__ == "__main__":
    seguidores_mensagem = ["Carlos", "Claudia", "Marcia", "Rodolfo"]
    seguidores_push_notification = ["Carlos"]
    seguidores_email = ["Claudia", "Marcia"]

    meuPerfil = Perfil()
    NotificadorMensagem(meuPerfil, seguidores_mensagem)
    NotificadorPushNotification(meuPerfil, seguidores_push_notification)
    NotificadorEmail(meuPerfil, seguidores_email)

    meuPerfil.adicionar_post("Olá universo da programação!")
