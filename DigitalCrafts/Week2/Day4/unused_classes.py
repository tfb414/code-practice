    class Background(object):
        def __init__(self, location):
            self.background = ""
            self.location = location

        def create_background(self):
            self.background = pygame.image.load(self.location).convert_alpha()
            
        def run_background(self):
            screen.blit(self.background, (0, 0))

    Game initialization
    
    background = Background('images/background.png')
    background.create_background()
    background.run_background()



        
        
