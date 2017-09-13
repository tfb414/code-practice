
import sys

def algo():
    first_numbers = sys.stdin.readline()
    array = sys.stdin.readline()
    
    array = array.split(" ")
    # newarray = [int(numeric_string) for numeric_string in array]
    newarray = array
    
    numbers = first_numbers.split(" ")
    range_min = int(numbers[0])
    range_max = int(numbers[1])
    
    # array = [7,3,5,6]

    highest_total = 0

    for i in range(len(newarray)):
        temp_total = 0
        counter = i
        while temp_total <= range_max and counter < range_min and (temp_total + int(newarray[counter]) <= range_max):
            
            if temp_total + int(newarray[counter]) <= range_max:
                temp_total = temp_total + int(newarray[counter])
                counter = counter + 1
        if temp_total > highest_total:
            highest_total = temp_total
    print highest_total
    return highest_total   

algo()



import sys

def algo():
    first_numbers = sys.stdin.readline()
    array = sys.stdin.readline()
    
    array = array.split(" ")
    # newarray = [int(numeric_string) for numeric_string in array]
    newarray = array
    
    numbers = first_numbers.split(" ")
    range_min = int(numbers[0])
    range_max = int(numbers[1])
    
    # array = [7,3,5,6]

    highest_total = 0

    for i in range(len(newarray)):
        temp_total = 0
        counter = i
        while temp_total <= range_max and counter < range_min and (temp_total + int(newarray[counter]) <= range_max):
            
            if temp_total + int(newarray[counter]) <= range_max:
                temp_total = temp_total + int(newarray[counter])
                counter = counter + 1
        if temp_total > highest_total:
            highest_total = temp_total
    print highest_total
    return highest_total   

algo()





