# def de_dup(list1):
#     print list(set(list1))

# de_dup([1,2,3,4,1,2,3,4,5,6,7])

def de_dup2(list1):
    answer = []
    for x in enumerate(list1):
        if(x[0] == list1.index(x[1])):
            answer.append(x[1])
    print answer
de_dup2(["a","b","c","d","a","c","e","f"])