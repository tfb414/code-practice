def main():
    fib_number_total = 0
    fib_number_even_total = 0
    fib_number_array = [1,2,3]
    while fib_number_array[-1] < 4000000:
        fib_number_array.append(fib_number_array[-1] + fib_number_array[-2])
        
    fib_number_even_total = sum(filter(lambda x: x % 2 == 0, fib_number_array))
    
    print fib_number_even_total
    return fib_number_even_total

main()