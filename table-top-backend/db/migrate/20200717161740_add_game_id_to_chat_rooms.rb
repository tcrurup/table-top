class AddGameIdToChatRooms < ActiveRecord::Migration[6.0]
  def change
    add_column :chat_rooms, :game_id, :integer
  end
end
