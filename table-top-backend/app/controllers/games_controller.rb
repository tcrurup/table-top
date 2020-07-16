class GamesController < ApplicationController

    def load
        user = User.find(game_params[:user_id].to_i)
        game_room = GameRoom.find(game_params[:id].to_i)
        render json: GameSerializer.new(game_room).to_serialized_json
    end
    
    def delete
        user = User.find(game_params[:user_id].to_i)
        game_room = GameRoom.find(game_params[:id].to_i)
        game_room.delete_game if user.has_room?(game_room)
        render json: user.game_rooms
    end

    def newGameRoom
        puts params
        user = User.find_by(id: game_params[:userId])
        game_room = GameRoom.find_by(id: game_params[:id])
        puts game_room.has_game?
        if user.has_room?(game_room)
            game_room.init_room(game_params[:name])
        end
        render json: user.game_rooms
    end

    private

    def game_params
        params.require(:game).permit(:id, :name, :has_game, :userId, :user_id, :serialized_to)
        #need to consolidate the user_id's
    end
end