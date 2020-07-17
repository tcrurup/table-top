class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.integer :game_room_id
      t.string :name
    end
  end
end
