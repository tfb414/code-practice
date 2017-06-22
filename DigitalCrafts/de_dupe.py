# def de_dup(list1):
#     print list(set(list1))

# de_dup([1,2,3,4,1,2,3,4,5,6,7])

def de_dup2(list1):
    answer = []
    length = len(list1)
    
    if list1[12] != list1.index(list1[12]):
        answer.append(list1[12])
    print answer
de_dup2([1,2,3,4,5,6,1,2,3,4,7,8,9])