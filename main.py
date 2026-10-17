from kivy.app import App
from kivy.uix.label import Label


class MinimalApp(App):
    def build(self):
        return Label(text="Hello, Android!")


if __name__ == "__main__":
    MinimalApp().run()
