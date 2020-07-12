class User < ApplicationRecord

    #ASSOCIATIONS
    has_many :game_rooms

    has_secure_password
    #has_secure_token :id_token

    def createGameRoom(name)
        newRoom = GameRoom.new({name: name})
        self.game_rooms << newRoom
    end



end