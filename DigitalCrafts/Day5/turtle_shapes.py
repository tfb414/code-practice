from turtle import *
    
def draw_triangle(size):
    for i in range(3):
        forward(size)
        left(120)
    
def draw_square(size):
    for i in range(4):
        forward(size)
        left(90)
def draw_hexagon(size):
    for i in range(6):
        forward(size)
        left(60)
def draw_octogon(size):
    for i in range(8):
        forward(size)
        left(45)
def draw_pentagon(size):
    for i in range(5):
        forward(size)
        left(72)
def draw_circle(size):
    circle(50)
def draw_star(size):
    for i in range(5):
        left(70)
        forward(size)
        right(145)
        forward(size)
def ask_input():
        return raw_input("What shape would you like for me to draw? ")
def shapes(input):
    size = int(raw_input("What size would you like the shape to be? Please enter a number between 1-300 "))
    if(input == "triangle"):
        draw_triangle(size)
        shapes(ask_input())
    if(input == "square"):
        draw_square(size)
        shapes(ask_input())
    if(input == "pentagon"):
        draw_pentagon(size)
        shapes(ask_input())
    if(input == "octogon"):
        draw_octogon(size)
        shapes(ask_input())
    if(input == "pentagon"):
        draw_pentagon(size)
        shapes(ask_input())
    if(input == "circle"):
        draw_circle(size)
        shapes(ask_input())
    if(input == "star"):
        draw_star(size)
        shapes(ask_input())
shapes(raw_input("What shape would you like for me to draw? "))
