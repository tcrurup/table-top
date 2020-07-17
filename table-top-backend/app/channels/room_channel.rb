class RoomChannel < ApplicationCable::Channel

    def subscribed
        if params[:room_id].present?
          # creates a private chat room with a unique name
          stream_from("ChatRoom-#{(params[:room_id])}")
        end
    end

    def speak(data)      
      sender_id    = data['sender_id']
      room_id   = data['room_id']
      message   = data['message']

      
      
      chat_room = get_chat_room(room_id)
      Message.create(
        chat_room: chat_room,
        sender_id: sender_id,
        content: message
      )
    end    

    private

    def get_chat_room(game_id)
      puts('**************************************')
      puts game_id
      game = Game.find_by(id: game_id)
      puts game.chat_room
      game.chat_room
    end
end