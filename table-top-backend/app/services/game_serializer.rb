class GameSerializer

    def initialize(game_object)
        @game = game_object
    end

    def to_serialized_json
        options = {
            only: [
                :id,
                :user_id,
                :name
            ]
        }   
        @game.to_json(options)
    end

end