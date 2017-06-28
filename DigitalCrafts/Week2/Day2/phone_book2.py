import os
import pickle
import time

def main():
    menu = [["Look up an entry", look_up_entry], ["Add an entry", add_entry], ["Delete an Entry", "0"],["List all entries", list_entries], ["Save Entries", save_entries],["Restore Entries", restore_entries], ["Quit", exit]]
    phone_book = {}
    menu_choice = -1
    print_list(menu, False, True, "Menu")
    while menu_choice < 7:
        menu_choice = main_menu(menu)
        phone_book = menu[menu_choice - 1][1](phone_book)

    exit()
        
def exit():
    print "it's done"
    return

def main_menu(menu):
    menu_choice = 0
    while menu_choice not in range(1, 7):
        print_list(menu, False, True, "Menu" )
        menu_choice = int(raw_input("What would you like to do? "))
    return menu_choice

########################
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
    print("\n")
def print_dictionary_entry(key, phone_book):
    entry = phone_book[key][0]
    for keys in sorted(entry.keys()):
        print "\t %s: %s" %(keys, entry[keys])
########################
def ask_name():
    return raw_input("Name: ")
def ask_phone_number():
    return raw_input("Phone Number: ")
def look_up_entry():
    print "derp"
def add_entry(phone_book):
    os.system("clear")
    add_title("Add an Entry")
    name = ask_name()
    phone_number = ask_phone_number()
    phone_book[name] = [{"Name": name, "Phone Number": phone_number}] 
    print_dictionary_entry(name, phone_book)
    return phone_book
def save_entries(phone_book):
    my_file = open("phone_book.pickle", "w")
    pickle.dump(phone_book, my_file)
    my_file.close()
    return phone_book

def restore_entries(phone_book):
    my_file = open("phone_book.pickle", "r")
    phone_book = pickle.load(my_file)
    print phone_book
    return phone_book


# rewrite this garbage from scatch
# def print_dictionary_entry(key, phone_book):
#     entry = phone_book[key][0]
#     for keys in sorted(entry.keys()):
#         return "\t %s: %s" %(keys, entry[keys])

# def list_entries(phone_book):
#     print phone_book
#     for values in phone_book:
#         print_dictionary_entry(values, phone_book)
#     return phone_book
main()