def sumAll(arr):
    endNumber = max(arr)
    startNumber = min(arr)
    answer = 0
    while(startNumber <= endNumber):
        answer += startNumber
        startNumber += 1
    print answer
    return answer

sumAll([1,4])
