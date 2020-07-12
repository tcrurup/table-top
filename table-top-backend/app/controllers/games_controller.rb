class GamesController < ApplicationController

    def load
        puts params
        render json: {message: 'success'}
    end
end