def multiplicationTables():
    firstDigit = 1
    secondDigit = 1
    while (firstDigit <= 10):
        while (secondDigit <= 10):
            print "%d x %d = %d" %(firstDigit, secondDigit, firstDigit * secondDigit)
            secondDigit += 1
        secondDigit = 1
        firstDigit +=1

multiplicationTables()