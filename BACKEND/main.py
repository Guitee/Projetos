
import glob
from os import stat

def list_directory(fname):
  print("LISTA DE ARQUIVOS")
  print(glob.glob(fname + "*"))
  print("DONO DO ARQUIVO")
  print(stat(fname).st_uid)

list_directory("C:/Users/Guite/Projetos/BACKEND/")