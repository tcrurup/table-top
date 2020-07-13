class GamesController < ApplicationController

    def load
        puts params
        render json: {message: 'load success'}
    end

    def create
        puts game_params
        render json: {message: "create success"}
    end

    private

    def game_params
        params.require(:game).permit(:id, :name, :has_game, :user_id)
    end
end