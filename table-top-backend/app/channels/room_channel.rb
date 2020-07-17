class RoomChannel < ApplicationCable::Channel

    def subscribed
        if params[:room_id].present?
          # creates a private chat room with a unique name
          stream_from("ChatRoom-#{(params[:room_id])}")
        end
    end

    def speak(data)      
      sender    = data['sender_id']
      room_id   = data['room_id']
      message   = data['message']

      
      
      chatRoom = self.get_chat_room(room_id)
      chatRoom.new_message(message, sender)
    end    

    private

    def get_chat_room(game_id)
      puts('**************************************')
      puts GameRoom.find_by(id: game_id).game.chat_room
    end
end