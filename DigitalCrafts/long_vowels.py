def long_vowels(input):
    answer = input
    for i in range(len(input)):
        if (input[i] == "a" and input[i+1] == "a"):
            answer = input[:i] + "aaa" + input[i:]
        if (input[i] == "e" and input[i+1] == "e"):
            answer = input[:i] + "eee" + input[i:]
        if (input[i] == "i" and input[i+1] == "i"):
            answer = input[:i] + "iii" + input[i:]        
        if (input[i] == "o" and input[i+1] == "o"):
            answer = input[:i] + "ooo" + input[i:]
        if (input[i] == "u" and input[i+1] == "u"):
            answer = input[:i] + "uuu" + input[i:]                    
    print answer
long_vowels("man")