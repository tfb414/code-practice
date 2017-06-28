import random
import time
import os

class Character(object):
    def __repr__(self):
        return "Health: %s" %(self.health)

    def alive(self):
        return self.health > 0
        print "%s is dead!" % (self.name)

    def print_status(self):
        print "Health: %d" % (self.health)
    
    def attack(self, target):
        print "%s attacks %s" %(self.name, target.name)
        target.receive_damage(self.attack_power)
        
    def receive_damage(self, points):
        self.health -= points
        print "\t %s received %d damage. " %(self.name, points)
        if not self.alive():
            print "%s is dead!" % (self.name)


class Warrior(Character):
    def __init__(self):
        self.name = "Warrior"
        self.health = 100
        self.attack_power = 3
        self.additional_damage = 3
        self.gold = 0
    
    def attack(self, target):
        if random.randint(0, 100) >= 80:
            self.attack_power += self.additional_damage
            super(Warrior, self).attack(target)
            self.attack_power -= self.additional_damage
        else:
            super(Warrior, self).attack(target)
        

class Goblin(Character):
    def __init__(self):
        self.name = "Goblin"
        self.health = 30
        self.attack_power = 6
        self.bounty = 10

class Medic(Character):
    def __init__(self):
        self.name = "Medic"
        self.health = 20
        self.power = 2
        self.attack_power = 1
        self.bounty = 5
    
    def recover_health(self):
        if random.randint(0, 100) >= 80:
            self.health += 2
            print "%s recovered 2 health!" %self.name

class Shadow(Character):
    def __init__(self):
        self.name = "Shadow"
        self.health = 1
        self.power = 10
        self.attack_power = 8
        self.bounty = 50
    
    def receive_damage(self, points):
        if random.randint(0, 100) >= 90:
            super(Shadow, self).receive_damage(points)
        else:
            print "\t Shadow didn't take any damage!"
        

    


class Battle(object):
    def add_title(self, title_name):
        spaces = (30 - len(title_name)) / 2
        print "*" * 30
        print (spaces * " ") + title_name.upper()
        print "*" * 30

    def do_battle(self, hero, enemy):
        while hero.alive() and enemy.alive():
            self.add_title("%s VS %s" %(hero.name, enemy.name)) 
            print "what do you want to do?"
            print "1. Fight"
            print "2. Nothing"
            print "3. Check status"
            print "4. flee"
            input = raw_input()

            if input == "1":
                hero.attack(enemy)
            
            if input == "2":
                pass

            if input == "3":
                hero.print_status()
            if input == "4":
                print "goodbye."
                break
            if enemy.alive():
                enemy.attack(hero)
                if hero.alive() == False:
                    print "you dead!"    
            if hero.name == "Medic":
                hero.recover_health()
            if not enemy.alive():
                hero.gold += enemy.bounty
                return True
                

warrior = Warrior()  
enemies = [Shadow(), Goblin()]
medic = Medic()
battle_engine = Battle()

for enemy in enemies:
    hero_won = battle_engine.do_battle(warrior, enemy)
    if not hero_won:
        print "You lose"
        exit()
print "You win! You gained %d gold" % warrior.gold


    

