def leetspeak(input):
    input = list(str.upper(input))
    for index in range(len(input)):
        if input[index] == "A":
            input[index] = "4"
        if input[index] == "E":
            input[index] = "3"
        if input[index] == "G":
            input[index] = "6"
        if input[index] == "I":
            input[index] = "1"
        if input[index] == "O":
            input[index] = "0"  
        if input[index] == "S":
            input[index] = "5"
        if input[index] == "T":
            input[index] = "7"
    answer = "".join(input)
    print answer
leetspeak("this is a test")