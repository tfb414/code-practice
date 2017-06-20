def add(a, b):
    print "adding {} + {}".format(a, b)
    return a + b

def subtract(a, b):
    print "subtracting {} - {}".format(a, b)
    return a - b

def multiply(a, b):
    print "multiplying {} * {}".format(a, b)
    return a * b

def divide(a, b):
    print "dividing {} / {}".format(a, b)
    return a / b

print "Let's do some math with just functions!"

age = add(30, 5)
height = subtract(78, 4)
weight = multiply(90, 2)
iq = divide(100, 2)

print "Age: {}, Height: {}, Weight: {}, IQ: {}".format(age, height, weight, iq)

print "here is a puzzle"

what = add(age, subtract(height, multiply(weight, divide(iq, 2))))

print "that becomes: ", what, "can you do that by hand"
