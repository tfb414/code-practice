def nToM(start, end):
    start = int(start)
    end = int(end)
    count = start
    while(start < end):
        start += 1
        print start

nToM(raw_input("Starting number: "), raw_input("Ending Number: "))