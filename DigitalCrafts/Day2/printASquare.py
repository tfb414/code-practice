def printASquare(width, height):
    width = int(width)
    height = int(height)
    counter = 0
    while counter < height:
        print width * "*"
        counter += 1

printASquare(raw_input("How wide do you want your square? "), raw_input("How tall do you want your square? "))