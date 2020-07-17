class Message < ApplicationRecord
    
    belongs_to :chat_room
    belongs_to :sender, class_name :User, foreign_key: 'sender_id'


    after_create_commit :create_broadcast_job
    
    def perform(message)
        payload = {
          room_id: message.conversation.id,
          content: message.content,
          sender: message.sender,
        }
    end

    def create_broadcast_job
        BroadcastMessageJob.perfom_later(self)
    end
        
    
end