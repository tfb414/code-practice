import os
import time
import matplotlib.pyplot as plot
import matplotlib
import numpy as np
def lunch_tracker():
    restaurants = [["Chipotle", 0], ["Naan Stop",0], ["Lovies BBQ",0],["Bankok Thyme",0], ["Whole Foods",0]]
    menu_list = [["Log a restaurant",update_tracker], ["Manage restaurants",manage_restaurant_list], ["Exit", exit]]
    welcome_text(restaurants)
    menu(restaurants, menu_list)
    
def welcome_text(restaurants):
    print "welcome to Tim's Lunch Tracker!\n"
    print "Please see the list of available restaurants below:\n"

def update_tracker(restaurants, menu_list):
    os.system("clear")
    print("Which restaurant did you go to?")
    print_list(restaurants, False)
    rest_choice = (int(raw_input("Please choose one of the options based on the number. Input 0 to exit \n"))-1)
    restaurants[rest_choice][1] += 1
    if(rest_choice == -1):
        exit()
    print "Great! You just logged %s you've been there %d times \n" %(restaurants[rest_choice][0], restaurants[rest_choice][1])
    return_to_menu(restaurants, menu_list)
    

def print_list(two_dim_array, display):
    for i in range(len(two_dim_array)):
        if(display == True):
            print "%d. %s: %d" %((i+1), two_dim_array[i][0], two_dim_array[i][1])
        else:
            print "%d. %s" %((i+1), two_dim_array[i][0])

    print "\n"  

def menu(restaurants, menu_list):
    os.system("clear")
    print "Menu:"
    print_list(menu_list, False)
    menu_choice = (int(raw_input("Please choose one of the options from the menu (1-3) "))-1)
    menu_list[menu_choice][1](restaurants, menu_list)

def manage_restaurant_list(restaurants, menu_list):
    # manage_restaurant_menu_list = [["Add", add_restaurant]] you need to make is so that it can access the menu and the if statement
    manage_restaurant_menu_list = [["Add", add_restaurant], ["Remove restaurant", remove_restaurant], ["Sort Restaurants", sort_restaurants],["Review visits", review_visits], ["Graph visits", graph_visits]]
    os.system("clear")
    print_list(manage_restaurant_menu_list, False)
    update_choice = int(raw_input("Would you like to do? "))
    manage_restaurant_menu_list[update_choice-1][1](restaurants, menu_list)

def extract_2d_into_array(first_level, restaurants):
    fixed_data = []
    for x in restaurants:
        fixed_data.append(x[first_level])
    return fixed_data

def return_to_menu(restaurants, menu_list):
    print("Please hit enter when you are ready to return")
    if(raw_input("")!= "asdfas"):
        menu(restaurants, menu_list)
    
def exit(restaurants, menu_list):
    return
def add_restaurant(restaurants, menu_list):
    os.system("clear")
    restaurant_name_to_add = raw_input("What restaurant would you like to add? ")
    restaurants.append([restaurant_name_to_add, 0])
    menu(restaurants, menu_list)
def remove_restaurant(restaurants, menu_list):
    os.system("clear")
    print_list(restaurants, False)
    restaurant_name_to_remove = int(raw_input("What restaurant would you like to remove? "))
    restaurants.remove(restaurants[restaurant_name_to_remove - 1])
    menu(restaurants, menu_list)
def sort_restaurants(restaurants, menu_list):
    os.system("clear")
    print("Your restaurant list has now been sorted by popularity!")
    restaurants.sort(key = lambda x: x[1], reverse=True)
    print_list(restaurants, True)
    return_to_menu(restaurants, menu_list)
def review_visits(restaurants, menu_list):
    os.system("clear")
    print("please see your visits below")
    print_list(restaurants, True)
    return_to_menu(restaurants, menu_list)
def graph_visits(restaurants, menu_list):
    os.system("clear")
    print("check it out!")
    x_axis = extract_2d_into_array(0, restaurants)
    y_axis = extract_2d_into_array(1, restaurants)
    x_axis_width = np.arange(len(x_axis))
    plot.bar(x_axis_width, y_axis, align="center", alpha=1)
    plot.xticks(x_axis_width, x_axis)
    plot.show()
lunch_tracker()