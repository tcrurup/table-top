class GamesController < ApplicationController

    def load
        puts params
        render json: {message: 'success'}
    end

    def create
        puts params
        render json: {message: "success"}
    end

end