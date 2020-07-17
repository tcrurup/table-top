class GameRoom < ApplicationRecord

    #ASSOCIATIONS 
    belongs_to :user
    has_one :game
    before_create :init

    def create_game(name)
        self.game = Game.create(name: name)
        self.has_game = true
        self.save
    end

    def delete_game
        self.name=""
        self.has_game = false
        self.save
    end    

    private

    def init
        self.has_game = false
    end
    
end