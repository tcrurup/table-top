class GameRoom < ApplicationRecord

    #ASSOCIATIONS 
    belongs_to :user
    has_one :game

    def create_game(name)
        self.game = Game.create(name: name)
        self.save
    end

    def delete_game
        self.name=""
        self.save
    end    
    
end