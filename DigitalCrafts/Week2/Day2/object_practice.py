# def greet(whom, me):
#     print greeting % (whom, me)

# class Person(object):
#     def __init__(self, name):
#         self.name = "Darth %s" % name
#     def greet(self):
#         print "hello, my name is %s" % self.name

# darth_tom = Person("Tom, the guys in teh front row")
# darth_tom.greet()

# class Counter(object):
#     def __init__ (self):
#         self.count = 0
#     def increment(self):
#         self.count += 1
#         print self.count

# counter1 = Counter()
# counter1.increment()
# counter1.increment()
# counter2 = Counter()
# counter2.increment()

class Contact(object):
    def __inti__(self, first_name, last_name, email, phone_number):
        self.first = first_name
        self.last = last_name
        self.email = email
        self.phone = phone_number
    def show(self):
        print "%s, %s - %s (%s)" % (self.last, self.first, self.email, self.phone)
me = Contact("Tim", "Brady", "email", "123-123-1234")
carl = Contact("carl", "severe", "mr_severe@gmail.com", "987-987-9876")

me.show()
carl.show()



