class AddHasGameToGameRooms < ActiveRecord::Migration[6.0]
  def change
    add_column :game_rooms, :has_game, :boolean 
  end
end
