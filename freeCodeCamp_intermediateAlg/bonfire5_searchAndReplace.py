import re

def myReplace(sentence, search, replace):
    derp = re.sub(search, replace, sentence)
    print derp

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
myReplace("Let us get back to more Coding", "Coding", "algorithms")
