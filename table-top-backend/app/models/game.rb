class Game < ApplicationRecord
    
    belongs_to :game_room
    has_one :chat_room
    before_create :init_game

    def init_game
        self.chat_room = ChatRoom.create()
    end
    

end