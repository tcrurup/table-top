class ChatRoom < ApplicationRecord

    belongs_to :game
    has_many :messages

    def new_message(message, sender_id)
        puts `searching for #{sender_id}`
        user = User.find(sender_id)
        puts `found #{user}`
        message = user.create_message(message)
        self.messages << message
    end
end