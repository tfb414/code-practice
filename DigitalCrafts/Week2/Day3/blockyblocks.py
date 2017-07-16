import pygame
from PIL import Image
import time
import random



def main():
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
            self.score_count = 0
            self.quit = False
            

        def block_mover(self, number_of_blocks, array_of_blocks):
            for block in array_of_blocks.blocks_array:
                block.make_and_move()

        def collision_detection(self, number_of_blocks, array_of_blocks):
            block_locations = []
            collision = False
            for i in range(number_of_blocks):
                block_locations.append(array_of_blocks.blocks_array[i].rect)
                if(block_locations[i].colliderect(hero.rect)):
                    collision = True
            return collision
        # def has_collided(self, collision):
        #     if collision == True:
        #         game_world.color = (255, 100, 0)
        #     if collision == False:
        #         game_world.color = (97, 159, 182)
        #     return game_world.color
        def show_score(self, score_count):
            score_count = str(int(score_count) + 1)
            score = game_world.font.render(score_count, 1, (255,0,0))
            game_world.screen.blit(score, (200, 15))
            return score_count

        def difficulty(self, score_count, array_of_blocks, number_of_blocks):
            if (int(score_count) % 100 == 0):
                array_of_blocks.spawn(1)
                number_of_blocks = number_of_blocks + 1
            return number_of_blocks
        
        def game_loop(self):
            while not game_world.quit:
                for event in pygame.event.get():
                    if event.type == pygame.QUIT:
                        game_world.quit = True
                game_world.screen.fill((50,50,50))
                hero.move()
                game_world.number_of_blocks = game_world.difficulty(game_world.score_count, array_of_blocks, game_world.number_of_blocks)
                collision = game_world.collision_detection(game_world.number_of_blocks, array_of_blocks)
                game_world.quit = collision
                game_world.block_mover(game_world.number_of_blocks, array_of_blocks)
                game_world.score_count = game_world.show_score(game_world.score_count)
                
                pygame.display.update()
                game_world.clock.tick(60)
        
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
    
    array_of_blocks = Create_blocks()
    array_of_blocks.spawn(game_world.number_of_blocks)
    
    hero = Hero()
    game_world.game_loop()

    pygame.quit()

if __name__ == '__main__':
    main()
# ^ move everything into a game_world class then have the while loop and my setup inside of that then you need to change the above code
# game world methods should operate on things that they recieve game would pass in difficulty level, or number of blocks etc. 
# game world is it's own thing, it's in init I have self.array_of_blocks it'll be initialized there and you can make changes without haveing to pass down the paramaters

# function for moving, color, and collision detection
# Collision detection not working for any but the first block


# you need to use super classes instead of just game_world. for example like game_world.hero instead of super 