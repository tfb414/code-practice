def multiply_lists(list1, list2):
    answer = []
    for i in range(len(list1)):
        answer.append(list1[i] * list2[i])
    print answer
multiply_lists([1,2,3,4,5], [1,2,3,4,5])