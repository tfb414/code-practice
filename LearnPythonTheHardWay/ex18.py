def print_two(*args):
    arg1, arg2 = args
    print "arg1: %r, arg2: %r" % (arg1, arg2)

#ok, that's *args is actually pointless we can jsut do this
def print_two_again(arg1, arg2):
    print "arg1: %r, arg2: %r" % (arg1, arg2)

#this just takes one argument
def print_one(arg1):
    print "arg1: %r" % arg1

# this one takes no arguments

def print_none():
    print "i got nuthin'."


printMe = raw_input("what do you want to print: ")
print_two(printMe, "Brady")
print_two_again("Tim", "Brady")
print_one("First!")
print_none()
