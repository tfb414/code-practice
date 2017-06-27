def even_numbers(list_of_numbers):
    answer = list(filter(lambda x: x % 2 == 0, list_of_numbers))
    print answer
even_numbers([1,2,3,4,5,6,7,8])