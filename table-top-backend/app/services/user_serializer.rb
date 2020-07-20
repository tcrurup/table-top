class UserSerializer

    def initialize(user_object)
        @user = user_object
    end

    def to_serialized_json
        options = { 
            only: [:id, :username],
            include: {
                game_rooms: {
                    only: [:id, :user_id],
                    
                    include: {
                        game:{
                            only: [:id, :name]
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