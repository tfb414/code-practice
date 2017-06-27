# def leetspeak(input):
#     input = list(str.upper(input))
#     for index in range(len(input)):
#         if input[index] == "A":
#             input[index] = "4"
#         if input[index] == "E":
#             input[index] = "3"
#         if input[index] == "G":
#             input[index] = "6"
#         if input[index] == "I":
#             input[index] = "1"
#         if input[index] == "O":
#             input[index] = "0"  
#         if input[index] == "S":
#             input[index] = "5"
#         if input[index] == "T":
#             input[index] = "7"
#   print   answer = "".join(input)
#     print answer
# leetspeak("this is a test")
import re

def leetspeak(input):
    key = ["A", "E", "G", "I", "O", "S", "T"]
    key_replace = ["4", "3", "6", "1", "0", "5", "7"]
    input = str.upper(input)
    for x in range(len(input)):
        if re.search(r"\b(A|E|G|I|0|S|T)\b", input[x]):
            whereIsIt = key.index(input[x])
            input = list(input)
            input[x] = key_replace[whereIsIt]
            input = "".join(input)
    print input
leetspeak("leet speak")