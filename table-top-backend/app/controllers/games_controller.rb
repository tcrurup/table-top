class GamesController < ApplicationController

    def load
        user = User.find_by(id: game_params[:user_id].to_i)
        game = Game.find(game_params[:id].to_i)
        render json: GameSerializer.new(game).to_serialized_json
    end
    
    def delete
        user = User.find_by(id: game_params[:user_id].to_i)
        game_room = GameRoom.find(game_params[:id].to_i)
        game_room.delete_game #if user.has_room?(game_room)
        render json: user.game_rooms
    end

    def new_game_room
        puts params
        user = User.find_by(id: game_params[:user_id])
        game_room = GameRoom.find_by(id: game_params[:id])
        if user.has_room?(game_room)
            game_room.create_game(game_params[:name])
        end
        puts user
        render json: UserSerializer.new(user).to_serialized_json
    end

    private

    def game_params
        params.require(:game).permit(:id, :name, :has_game, :userId, :user_id, :serialized_to)
        #need to consolidate the user_id's
    end
end