class GameRoom < ApplicationRecord

    #ASSOCIATIONS 
    belongs_to :user

    before_create :init

    def init_room(name)
        puts name
        self.name = name
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