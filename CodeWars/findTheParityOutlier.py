
def find_outlier(listOfNumbers):
    evenList = []
    oddList = []
    for i in range(len(listOfNumbers)):
        if(listOfNumbers[i] % 2 == 0):
            evenList.append(listOfNumbers[i])
        if(listOfNumbers[i] % 2 > 0):
            oddList.append(listOfNumbers[i])
    if (len(evenList) < len(oddList)):
        return evenList[0]
    return oddList[0]
       
