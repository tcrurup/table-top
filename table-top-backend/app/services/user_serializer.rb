class UserSerializer

    def initialize(user_object)
        @user = user_object
    end

    def to_serialized_json
        options = { 
            include: {
                game_rooms: {
                    only: [:id, :has_game, :user_id],
                    
                    include: {
                        game:{
                            only: [:id]
                        }
                    }
                },
                games_user_part_of: {
                    only: [:name, :id]
                }
            }
        }   
        @user.to_json(options)
    end



end