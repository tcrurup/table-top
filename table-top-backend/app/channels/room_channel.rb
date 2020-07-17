class RoomChannel < ApplicationCable::Channel

    def subscribed
        if params[:room_id].present?
          # creates a private chat room with a unique name
          stream_from("ChatRoom-#{(params[:room_id])}")
        end
    end

    def speak(data)
        sender    = get_sender(data)
        room_id   = data['room_id']
        message   = data['message']
    
        raise 'No room_id!' if room_id.blank?
        convo = get_convo(room_id) # A conversation is a room
        raise 'No conversation found!' if convo.blank?
        raise 'No message!' if message.blank?
    
        convo.users << sender unless convo.users.include?(sender)
        Message.create!(
          conversation: convo,
          sender: sender,
          content: message
        )
    end
      
    def get_convo(room_code)
      ChatRoom.find_by(room_code: room_code)
    end
      
    def get_sender
      puts 'getting sender'
    end
    

end