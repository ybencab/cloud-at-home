import os

def test():
  contenido = os.listdir("/home/data")
  return f"it works!, {contenido}"
