class Game < ApplicationRecord
    
    before_create :init_game
    
    belongs_to :game_room
    has_one :chat_room
    has_many :players, class_name: 'User', foreign_key: 'user_id'
    

    def init_game
        self.chat_room = ChatRoom.create()
    end
    

end