class AddChatRoomIdToGameRooms < ActiveRecord::Migration[6.0]
  def change
    add_column :game_rooms, :chat_room_id, :integer
  end
end
