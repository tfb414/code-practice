def spinWords(sentence):
    sentence = sentence.split(" ")
    newSentence = []
    for i in range(len(sentence)):
        word = sentence[i]
        if(len(sentence[i]) >= 5):
            word = "".join(list(reversed(sentence[i])))
        newSentence.append(word)
    newSentence = " ".join(newSentence)
    return newSentence

spinWords("Welcome Tim")