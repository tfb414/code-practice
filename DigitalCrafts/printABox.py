def printABox(width, height):
    width = int(width)
    height = int(height)
    counter = 0
    spaces = width - 2
    print width * "*"
    while (counter < (height - 2)):
        counter += 1
        print "*" + (spaces * " ") + "*"
    print width * "*"

printABox(raw_input("How wide do you want your square? "), raw_input("How tall do you want your square? "))