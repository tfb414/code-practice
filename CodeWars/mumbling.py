def accum(s):
    listOfLetters = list(s)
    answer = []
    counter = 1
    for i in listOfLetters:
        answer.append(counter * listOfLetters[counter-1])
        counter += 1

    answer = "-".join(answer).title()
    print answer

accum("derp")