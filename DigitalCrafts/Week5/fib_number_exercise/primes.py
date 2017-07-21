def main(num):
    factors = []
    prime_factors = []
    for n in range(2, num):
        if num % n == 0:
            factors.append(n)
    for fac in factors:   
        prime = True      
        for x in range(2,fac):
            if fac % x == 0:
                prime = False
        if prime == True:
            prime_factors.append(fac)


        # print "a", fac
        # for x in range(2, fac):
        #     print "b", x
        #     if fac % x == 0:
        #         print "break"
        #         break
        #     else: 
        #         print "d"
        #         if x not in prime_factors:
        #             prime_factors.append(x) 
    print prime_factors            


# main(13195)    

def main2(num): 
    factors = []
    prime_factors = []
    for n in range(2, num):
        if num % n == 0:
            prime = True      
            for x in range(2,n):
                if n % x == 0:
                    prime = False
            if prime == True:
                prime_factors.append(n)

    
    
    print prime_factors  


#  main2(13195)



# THIS WORKSSSSS!!!!!!!
def main3(num):
    aopf = [0,1]
    while not (aopf[-1] == aopf[-2]):
        for n in xrange(2, num):
            if num % n == 0:
                prime = True      
                for x in xrange(2,n):
                    if n % x == 0:
                        prime = False
                        break
                if prime == True:
                    num = num / n
                    aopf.append(n)
                    break
        aopf.append(num)
    print aopf[-1]            
                

            
main3(13195)
main3(600851475143)   
main3(398742423456) 