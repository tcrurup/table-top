class UsersController < ApplicationController

    def login
        render json: {message:'sucess', status: 200}
    end

end