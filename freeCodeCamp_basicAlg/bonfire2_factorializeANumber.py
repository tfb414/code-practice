import math

def factorialize (n):
    answer = math.factorial(n)
    print("{}").format(answer)
    return answer

factorialize(5)

def factorialManual (n):
    totalFactors = 1
    while n > 0:
        totalFactors *= n
        n -= 1
    print("{}").format(totalFactors)
    return totalFactors

factorialManual (5)
