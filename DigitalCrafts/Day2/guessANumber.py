from random import randint
def guessANumber():
    def requestGuess():
        return int(raw_input("Guess my number! "))
    secretNumber = randint(0,10)
    numberOfguesses = 3
    print "I am thinking of a number between 1 and 10."
    guess = requestGuess()
    while(guess != secretNumber):
        numberOfguesses -= 1
        if(numberOfguesses == 0):
            print "You're out of guesses!"
            return
        if(guess < secretNumber):
            print "%d is too low!" %guess
        if(guess > secretNumber):
            print "%d is too high!" %guess
        guess = requestGuess()
    print "You got it!"

    
guessANumber()

