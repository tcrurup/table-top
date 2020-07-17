class Message < ApplicationRecord
    belongs_to :chat_room
    belongs_to :sender


    def perform(message)
        payload = {
          room_id: message.conversation.id,
          content: message.content,
          sender: message.sender,
        }
        ActionCable.server.broadcast(build_room_id(message.conversation.id), payload)
    end
      
    def build_room_id(id)
        "ChatRoom-#{id}"
    end
    
end