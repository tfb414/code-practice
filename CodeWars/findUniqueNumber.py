import re

def find_uniq(arr):
    arrList = list(arr)
    myRegex = r"\b(?=\w)" + re.escape(arrList[0]) + r"\b(?=\w)"
    derp = re.search(myRegex, arrList)
    print derp

find_uniq([ 1, 1, 1, 2, 1, 1 ])


