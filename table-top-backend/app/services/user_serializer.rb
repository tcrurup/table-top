class UserSerializer

    def initialize(user_object)
        @user = user_object
    end

    def to_serialized_json
        options = {
            include: {
                :game_rooms => {:only => [
                    :name, 
                    :id,
                    :has_game,
                    :user_id
                ]}
                :games_part_of
            }
        }   
        @user.to_json(options)
    end


end