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

      chatRoom = ChatRoom.find_by(id: room_id)
      chatRoom.new_message(message, sender)
    end    

end