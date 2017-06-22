def printATriangle(height):
    height = int(height)
    counter = 0
    spaces = height * 2
    numberOfStars = 1
    while (counter < height):
        counter += 1
        print (spaces * " ") + (numberOfStars * "*")
        spaces -= 1
        numberOfStars += 2

printATriangle(raw_input("How tall do you want your triangle? "))