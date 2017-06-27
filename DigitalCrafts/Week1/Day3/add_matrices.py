def add_matrices(list1):
    answer = list1
    for i in range(len(list1)):
        for j in range(len(list1[0])):
            answer[i][j] = (list1[i][j] + list1[i][j])
    print answer
add_matrices([[1,2,3,4],[3,4,5,6]])