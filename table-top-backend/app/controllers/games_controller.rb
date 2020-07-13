class GamesController < ApplicationController

    def load
        puts params
        render json: {message: 'load success'}
    end

    def newGameRoom
        user = User.find_by(id: game_params[:user_id])
        game_room = GameRoom.find_by(id: game_params[:id])
        if user.has_room?(game_room)
            game_room.init_room
        end
        render json: {message: "create success"}
    end

    private

    def game_params
        params.require(:game).permit(:id, :name, :has_game, :user_id)
    end
end