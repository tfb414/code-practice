import pygame
from PIL import Image
import time
import random



def main():
    # color = (97, 159, 182)
    # wall_color = (255,255,0)
    # number_of_blocks = 1
    score_count = 0

    class Game_world(object):
        def __init__(self):
            self.width = 512
            self.height = 480
            self.screen = pygame.display.set_mode((self.width, self.height))
            self.font = pygame.font.SysFont("monospace", 30)
            self.game_setup = pygame.display.set_caption('BlockyBlocks')
            self.clock = pygame.time.Clock()
            self.color = (97, 159, 182)
            self.wall_color = (255,255,0)
            self.number_of_blocks = 1
        
        
    pygame.init()
    game_world = Game_world()

    class Block(pygame.sprite.Sprite):
        def __init__(self):
            pygame.sprite.Sprite.__init__(self)
            self.xloc = game_world.width
            self.yloc = random.randint(10, game_world.height)
            self.speed = random.randint(1, 10)
            self.rect = pygame.Rect(self.xloc, self.yloc, 30, 30)

        def make_and_move(self):
            self.rect = pygame.Rect(self.xloc, self.yloc, 30, 30)
            pygame.draw.rect(game_world.screen, game_world.wall_color, pygame.Rect(self.rect))
            self.xloc -= self.speed
            if self.is_too_far():
                self.reset()
        def is_too_far(self):
            return self.xloc < -30

        def reset(self):
            self.xloc = game_world.width
            self.yloc = random.randint(10, game_world.height)
            self.speed = random.randint(1, 5)
                    
    class Create_blocks(object):
        def __init__(self):
            self.blocks_array = []
            
        def spawn(self, number_of_blocks):
            for i in range(number_of_blocks):
                self.blocks_array.append(Block())
                
    class Hero(pygame.sprite.Sprite):
        def __init__(self):
            pygame.sprite.Sprite.__init__(self)
            self.height = 60
            self.width = 60
            self.xloc = 100
            self.yloc = 100
            self.rect = pygame.Rect(self.xloc, self.yloc,self.width, self.height)
            pygame.draw.rect(game_world.screen, game_world.color, pygame.Rect(self.rect))
        
        def move(self):
            self.rect = pygame.Rect(self.xloc, self.yloc,self.width, self.height)
            pygame.draw.rect(game_world.screen, game_world.color, pygame.Rect(self.rect))
            pressed = pygame.key.get_pressed()
            if pressed[pygame.K_UP] and self.yloc >= 0: self.yloc -= 5
            if pressed[pygame.K_DOWN] and self.yloc <= (game_world.height - self.height): self.yloc += 5
            if pressed[pygame.K_LEFT] and self.xloc >= 0: self.xloc -= 5
            if pressed[pygame.K_RIGHT] and self.xloc <= (game_world.width - self.width): self.xloc += 5
    
    def collision_detection(number_of_blocks, all_blocks):
        block_locations = []
        collision = False
        for i in range(number_of_blocks):
            block_locations.append(all_blocks.blocks_array[i].rect)
            if(block_locations[i].colliderect(hero.rect)):
                collision = True
        return collision

    def block_mover(number_of_blocks, all_blocks):
        for block in all_blocks.blocks_array:
            block.make_and_move()
        
    def has_collided(collision):
        if collision == True:
            game_world.color = (255, 100, 0)
        if collision == False:
            game_world.color = (97, 159, 182)
        return game_world.color

    def show_score(score_count):
        score_count = str(int(score_count) + 1)
        score = game_world.font.render(score_count, 1, (255,0,0))
        game_world.screen.blit(score, (200, 15))
        return score_count

    def difficulty(score_count, all_blocks, number_of_blocks):
        if (int(score_count) % 100 == 0):
            all_blocks.spawn(1)
            number_of_blocks = number_of_blocks + 1
        return number_of_blocks

    
    all_blocks = Create_blocks()
    all_blocks.spawn(game_world.number_of_blocks)
    hero = Hero()
    stop_game = False
    
    
    while not stop_game:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                stop_game = True

        game_world.screen.fill((50,50,50))

        hero.move()
        game_world.number_of_blocks = difficulty(score_count, all_blocks, game_world.number_of_blocks)
        collision = collision_detection(game_world.number_of_blocks, all_blocks)
        stop_game = collision
        block_mover(game_world.number_of_blocks, all_blocks)
        score_count = show_score(score_count)
        
        
        
        pygame.display.update()
        game_world.clock.tick(60)

    pygame.quit()

if __name__ == '__main__':
    main()
# ^ move everything into a game_world class then have the while loop and my setup inside of that then you need to change the above code
# game world methods should operate on things that they recieve game would pass in difficulty level, or number of blocks etc. 
# game world is it's own thing, it's in init I have self.all_blocks it'll be initialized there and you can make changes without haveing to pass down the paramaters

# function for moving, color, and collision detection
# Collision detection not working for any but the first block