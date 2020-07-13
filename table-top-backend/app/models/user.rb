class User < ApplicationRecord

    #ASSOCIATIONS
    has_many :game_rooms

    #ACTIVE RECORD CALLBACKS    
    before_create :initialize_game_rooms

    has_secure_password
    #has_secure_token :id_token

    MAX_GAMEROOMS = 3
    
    def has_room?(game_room_object)
        self.game_rooms.include?(game_room_object)
    end
    
    def initialize_game_rooms
        while self.game_rooms.length < MAX_GAMEROOMS
            self.game_rooms << GameRoom.create(name: "")
        end
    end





end