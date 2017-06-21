from random import randint
def guessANumber():
    secretNumber = randint(0,10)
    print "I am thinking of a number between 1 and 10."
    guess = int(raw_input("Guess my number! "))
    numberOfGuesses = 5
    while (guess != secretNumber):
        if(numberOfGuesses == 0):
            print "You ran out of guesses!"
        if(guess <  secretNumber):
            print "%d is too low" % guess
            numberOfGuesses -= 1
            guess = int(raw_input("Guess my number! "))
        if(guess > secretNumber):
            print "%d is too high"
            numberOfGuesses -= 1
            guess = int(raw_input("Guess my number! "))
        print "Yes! You Win!"
        return
    
guessANumber()