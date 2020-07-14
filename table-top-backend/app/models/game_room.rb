class GameRoom < ApplicationRecord

    #ASSOCIATIONS 
    belongs_to :user

    before_create :init

    def init_room(name)
        self.name = name
        self.has_game = true
        self.save
    end
    

    private

    def init
        self.has_game = false
    end
    
end