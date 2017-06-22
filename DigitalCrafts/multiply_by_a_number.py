def multiply_by_a_number(list_of_numbers, n):
    n = int(n)
    answer = list(map(lambda x: x * n, list_of_numbers))
    print answer
multiply_by_a_number([1,2,3,4,5,6,7,8,9], raw_input("what would you like to multiple every value in your list by? "))