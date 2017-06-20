def getCount(inputStr):
    num_vowels = 0
    for i in inputStr:
        if(i == "i" or i == "e" or i == "o" or i == "u" or i == "a"):
            num_vowels += 1
    
    print num_vowels
    return num_vowels

getCount("abracadabra")