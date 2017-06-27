import time
def blastOff(startingNumber):
    startingNumber = int(startingNumber)
    if(startingNumber > 20):
        print "sorry that number is too big!"
        return
    while (startingNumber > 0):
        print startingNumber
        time.sleep(1)
        startingNumber -= 1
    print "BLAST OFF!"
    
blastOff(raw_input("what would you like to countdown from? "))