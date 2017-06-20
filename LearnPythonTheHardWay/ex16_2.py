# from sys import argv
#
# script, filename = argv

# print "alright let's open a file"
# target = open(filename, "r+")

# target.read()


print "let's take an input to open a file"

target = open(raw_input("please insert name of file to open: "), "a")

print "what would you like to write"
line1 = raw_input("line 1: ")

print "I'm going to write these to the file."

target.write(line1)

print("let's close this out")
target.close()
