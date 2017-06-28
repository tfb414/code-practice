class Person(object):
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_count = 0
    
    def __repr__(self):
        return "%s, %s, %s" % (self.name, self.email, self.phone)
    
    def greet(self, other_person):
        print 'Hello %s, I am %s!' % (other_person.name, self.name)
        self.greeting_count += 1
        print self.greeting_count

    def greeting_count_printer(self):
        print self.greeting_count

    def print_contact_info(self):
        print "%s's email: %s, %s's phone number: %s, %s's friends are: %s" %(self.name, self.email, self.name, self.phone, self.name, self.friends)

    def add_friend(self, friend):
        self.friends.append(friend)

    def num_friends(self):
        print "Tim has %d friends" % len(self.friends)
    

tim = Person("Tim", "tim@gmail.com", "123-123-123-4")
jordan = Person("Jordan", "jordan@aol.com", "123-456-4567")
tim.add_friend("Derp")
# print(tim.friends)
tim.greet(jordan)
tim.greet(jordan)
jordan.greet(tim)
tim.greeting_count_printer()
print tim

# print(tim.name)
# print(jordan.email)
tim.print_contact_info()
tim.num_friends()

# class Vehicle(object):
#     def __init__(self, make, model, year):
#         self.make = make
#         self.model = model
#         self.year = year
#     def print_info(self):
#         print self.year, self.make, self.model

# tims_car = Vehicle("Nissan", "Leaf", 2015)
# tims_car.print_info()