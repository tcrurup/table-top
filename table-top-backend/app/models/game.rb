class Game < ApplicationRecord
    
    before_create :init_game
    
    belongs_to :game_room
    has_one :chat_room
    has_many :player_games
    has_many :players, source: :user, through: :player_games, foreign_key:'player_id'

    def init_game
        self.chat_room = ChatRoom.create()
    end
    

end