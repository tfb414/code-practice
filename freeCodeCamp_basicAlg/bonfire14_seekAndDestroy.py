def seekAndDestroy(list, destroy):
    setList = set(list)
    answer = setList.difference(destroy)
    return answer


seekAndDestroy([1,2,3,4,5,10,12],[2,3,4,5,6])
