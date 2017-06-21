import re

def find_uniq(arr):
    arrList = list(arr)
    myRegex = arrList[0]
    derp = re.search(r'%d' % myRegex, arrList)
    print derp

find_uniq([ 1, 1, 1, 2, 1, 1 ])


incomplete