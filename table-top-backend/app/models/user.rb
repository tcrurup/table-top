class User < ApplicationRecord

    #ASSOCIATIONS
    has_many :game_rooms
    has_many :messages
    has_many :player_games, foreign_key: 'player_id'
    has_many :games_user_part_of, through: :player_games, source: :game

    #ACTIVE RECORD CALLBACKS    
    before_create :initialize_game_rooms

    has_secure_password
    #has_secure_token :id_token

    MAX_GAMEROOMS = 3
    
    def has_room?(game_room_object)
        self.game_rooms.include?(game_room_object)
    end

    def join_game(game)
        unless self.games_user_part_of.include?(game)
            self.games_user_part_of << game
            game.players << self
        end    
    end

    def create_message(message)
        message = Message.create(content: message)
        self.messages << message
        message
    end

    def create_game_in_slot(name, slot_number)
        index = (slot_number - 1); #Subtract one from input to get position in array
        self.game_rooms[index].create_game(name)
    end
    
    def initialize_game_rooms
        while self.game_rooms.length < MAX_GAMEROOMS
            self.game_rooms << GameRoom.create()
        end
    end

end