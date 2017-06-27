def factorANumber(n):
    counter = int(n)
    while (counter > 0):
        if int(n) % counter == 0:
            print counter
        counter -= 1

factorANumber(raw_input("What number do you want to factor? "))