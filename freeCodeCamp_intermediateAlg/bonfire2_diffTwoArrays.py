def diffArray(array1, array2):
    set1 = set(array1)
    set2 = set(array2)
    answer1 = set1.difference(set2)
    answer2 = set2.difference(set1)
    answer1 = list(answer1)
    answer2 = list(answer2)
    finalAnswer = answer1 + answer2
    print finalAnswer
    return finalAnswer




diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
