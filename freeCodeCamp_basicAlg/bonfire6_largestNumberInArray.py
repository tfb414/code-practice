def findLargestNumber(array):
    answer = []
    for x in array:
        answer.append(max(x))

    print answer
    return answer



findLargestNumber([[1,2,3,4],[1,1,1,1],[1,2,5,8],[5,4,2,5]])
