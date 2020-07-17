class AddGameIdToGameRooms < ActiveRecord::Migration[6.0]
  def change
    add_column :game_rooms, :game_id, :integer
  end
end
