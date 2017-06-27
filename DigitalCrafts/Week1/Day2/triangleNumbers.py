def printTriangleNumbers(numberOfTriangleNumbers):
    startingNumber = 1
    while (startingNumber < int(numberOfTriangleNumbers)):
        triangleNumber = startingNumber * (startingNumber + 1)/2
        print triangleNumber
        startingNumber += 1

printTriangleNumbers(raw_input("How many triangle numbers do you want to print? "))