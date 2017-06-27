def mult_matrices(list1, list2):
    answer = list1
    for i in range(len(list1)):
        for j in range(len(list1[0])):
            answer[i][j] = (list1[i][j] * list2[i][j] + (list1[i][j+1] * list2[i+1][j])) 
    print answer
mult_matrices([[1,2],[3,4]],[[1,2], [3,4]])

:( incomplete