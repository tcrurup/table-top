class RoomChannel < ApplicationCable::Channel

    def subscribed
        if params[:game_id].present?
          # creates a private chat room with a unique name
          stream_from("ChatRoom-#{(params[:game_id])}")
        end
    end

    def speak(data)      
      sender_id    = data['sender_id']
      game_id   = data['game_id']
      message   = data['message']

      
      chat_room = get_chat_room(game_id)
      Message.create(
        chat_room: chat_room,
        sender_id: sender_id,
        content: message
      )
    end    

    private

    def get_chat_room(game_id)
      Game.find_by(id: game_id).chat_room
    end
end