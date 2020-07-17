class PlayerGame < ApplicationRecord 

    belongs_to :user, foreign_key: 'player_id'
    belongs_to :game

end