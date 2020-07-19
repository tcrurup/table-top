class RemoveHasGameFromGameRooms < ActiveRecord::Migration[6.0]
  def change
    remove_column :game_rooms, :has_game
  end
end
