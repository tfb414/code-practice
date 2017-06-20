def getIndexToIns(arr, num):
    count = 0
    for x in arr:
        if x > num:
            count += 1
    arr.insert(count, num)
    return arr

getIndexToIns([40, 60], 50);
