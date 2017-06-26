import os
def print_list(two_dim_array, display, title, title_name):
    if(title == True):
        add_title(title_name)
    for i in range(len(two_dim_array)):
        if(display == True):
            print "%d. %s: %d" %((i+1), two_dim_array[i][0], two_dim_array[i][1])
        else:
            print "%d. %s" %((i+1), two_dim_array[i][0])

    print "\n" 

def add_title(title_name):

    spaces = (30 - len(title_name)) / 2
    print "*" * 30
    print (spaces * " ") + title_name.upper()
    print "*" * 30
def return_to_menu(phone_book):
    print("Please hit enter when you are ready to return to the menu")
    if(raw_input("")!= "asdfas"):
        phone_book_app(phone_book)
def print_dictionary_entry(key, phone_book):
    entry = phone_book[key][0]
    for keys in sorted(entry.keys()):
        print "\t %s: %s" %(keys, entry[keys])
def add_entry(phone_book):
    os.system("clear")
    add_title("Add an Entry")
    print("\n")
    name = raw_input("Whose record would you like to add? ")
    phone_number = raw_input("What is his/her phone number? ")
    phone_book[name] = [{"Name": name, "Phone Number": phone_number}]    
    print "Entry stored for %s" % (name)
    print_dictionary_entry(name, phone_book)
    return_to_menu(phone_book)

def look_up_entry(phone_book):
    name = raw_input("Whose record would you like to look up? ")
    print_dictionary_entry(name, phone_book)
    return_to_menu(phone_book)

def list_entries(phone_book):
    for values in phone_book:
        print values
        print_dictionary_entry(values, phone_book)

def phone_book_app(phone_book):
    top_menu = [["Look up an entry", look_up_entry], ["Add an entry", add_entry], ["Delete an Entry", 0],["List all entries", list_entries], ["Quit", exit]]
    print_list(top_menu, False, True, "Menu")
    menu_choice = int(raw_input("What would you like to do? "))
    print menu_choice
    top_menu[menu_choice-1][1](phone_book)

def main():
    phone_book = {}
    phone_book_app(phone_book)
def exit(phone_book):
    pass

main()


