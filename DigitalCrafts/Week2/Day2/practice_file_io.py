swift = open('swift.txt')
swift_lines = swift.read()
print swift_lines



for i in (range(len(swift_lines))):
    print "%d: %s" %(i+1, swift_lines)

# This didn't quite work right

hello_file = open('hello.txt', "r")
print hello_file.read()

hello_file2 = open('hello2.txt', "r+")
hello_file2.write("derp \n")
hello_file2.write("yes \n")
hello_file2.write("I said derp \n")
hello_file2.write("I said derp yes \n")
hello_file2.close()
hello_file2 = open('hello2.txt', 'r')
print hello_file2.readlines()
hello_file2 = open('hello2.txt', 'r')

for line in hello_file2.readlines():
    print line

