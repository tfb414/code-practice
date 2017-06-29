import pygame
from PIL import Image
import time
import random



def main():
    width = 512
    height = 480
    color = (97, 159, 182)
    wall_color = (255,255,0)
    number_of_blocks = 2

    pygame.init()
    screen = pygame.display.set_mode((width, height))
    pygame.display.set_caption('My Game')
    clock = pygame.time.Clock()

    class Manage_blocks(pygame.sprite.Sprite):
        def __init__(self):
            pygame.sprite.Sprite.__init__(self)
            self.xloc = width
            self.yloc = random.randint(10, height)
            self.speed = random.randint(1, 5)
            self.rect = pygame.Rect(self.xloc, self.yloc, 30, 30)

        def make_and_move(self):
            self.rect = pygame.Rect(self.xloc, self.yloc, 30, 30)
            pygame.draw.rect(screen, wall_color, pygame.Rect(self.rect))
            self.xloc -= self.speed
            if self.is_too_far():
                self.reset()
        def is_too_far(self):
            return self.xloc < -30

        def reset(self):
            self.xloc = width
            self.yloc = random.randint(10, height)
            self.speed = random.randint(1, 5)
                    
    class Create_blocks(object):
        def __init__(self):
            self.blocks_array = []
            
        def spawn(self, number_of_blocks):
            for i in range(number_of_blocks):
                self.blocks_array.append(Manage_blocks())
    
    class Hero(pygame.sprite.Sprite):
        def __init__(self):
            pygame.sprite.Sprite.__init__(self)
            self.height = 60
            self.width = 60
            self.xloc = 100
            self.yloc = 100
            self.rect = pygame.Rect(self.xloc, self.yloc,self.width, self.height)
            pygame.draw.rect(screen, color, pygame.Rect(self.rect))
        
        def move(self):
            self.rect = pygame.Rect(self.xloc, self.yloc,self.width, self.height)
            pygame.draw.rect(screen, color, pygame.Rect(self.rect))
            pressed = pygame.key.get_pressed()
            if pressed[pygame.K_UP]: self.yloc -= 5
            if pressed[pygame.K_DOWN]: self.yloc  += 5
            if pressed[pygame.K_LEFT]: self.xloc -= 5
            if pressed[pygame.K_RIGHT]: self.xloc  += 5
    
    all_blocks = Create_blocks()
    all_blocks.spawn(number_of_blocks)
    hero = Hero()
    stop_game = False
    while not stop_game:
        for event in pygame.event.get():

            # Event handling

            if event.type == pygame.QUIT:
                stop_game = True

        screen.fill((50,50,50))
        
        

        # Game logic
        
        hero.move()
        a = []
        for i in range(number_of_blocks):
            all_blocks.blocks_array[i].make_and_move()
            a.append(all_blocks.blocks_array[i].rect)
            b = hero.rect
            for i in range(len(a)):
                if(a[i].colliderect(b)):
                    color = (255, 100, 0)
                else: 
                    color = (97, 159, 182)
        
        
        pygame.display.update()
        clock.tick(60)

    pygame.quit()

if __name__ == '__main__':
    main()
