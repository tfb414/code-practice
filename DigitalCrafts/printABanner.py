def printAbanner(text):
    width = len(text) + 2
    height = 3
    print width * "*"
    print "*" + text + "*"
    print width * "*"

printAbanner(raw_input("What would you like your banner to say? "))