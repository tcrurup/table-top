class GamesController < ApplicationController

    def load
        puts params
        render json: {message: 'load success'}
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
        params.require(:game).permit(:id, :name, :has_game, :userId)
    end
end