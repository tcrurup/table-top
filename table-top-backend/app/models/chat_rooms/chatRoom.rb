class ChatRoom < ApplicationRecord

    belongs_to :game
    has_many :messages

    def new_message(message, sender_id)
        user = User.find_by(id: sender_id)
        message = user.createMessage(message)
        self.messages << message
    end
end