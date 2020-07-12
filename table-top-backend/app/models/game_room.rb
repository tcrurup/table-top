class GameRoom < ApplicationRecord

    #ASSOCIATIONS 
    belongs_to :user

    before_create :init_room

    private

    def init_room
        self.has_game = false
    end
end