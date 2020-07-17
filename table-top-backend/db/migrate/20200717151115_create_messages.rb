class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      
      t.integer :chat_room_id
      t.integer :sender_id

    end
  end
end
