def oddNumbers(start, end):
    start = int(start)
    end = int(end)
    count = start
    while(start < end):
        start += 1
        if(start % 2 != 0):
            print start

oddNumbers(raw_input("Starting number: "), raw_input("Ending Number: "))