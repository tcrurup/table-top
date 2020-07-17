class BroadcastMessageJob < ApplicationJob
  queue_as :default

  def perform(message)
    payload = {
      room_id: message.chat_room.id,
      content: message.content,
      sender: message.sender
    }
    ActionCable.server.broadcast(build_room_id(message.chat_room.id), payload)
  end

  
  def build_room_id(id)
    "ChatRoom-#{id}"
  end
end
