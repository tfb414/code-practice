def howManyCoins():
    numberOfCoins = 0
    while(raw_input("Do you want a coin? ") == "yes"):
        numberOfCoins += 1
        print "you have %d coins" % numberOfCoins
    print "bye"
howManyCoins()