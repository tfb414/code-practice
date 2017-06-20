import re


def translatePigLatin(str):
    letters = list(str)
    indexOfFirstVowel = re.search(r"\b(a|e|i|o|u)\b", str).start()
    consonantCluster = letters[0:indexOfFirstVowel]
    print consonantCluster
    letters.extend(consonantCluster)
    letters.extend("ay")
    letters = letters[indexOfFirstVowel::]
    letters = "".join(letters)
    print letters

translatePigLatin("california")
