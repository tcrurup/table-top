class UsersController < ApplicationController

    def login
        type = user_params[:type]
        if type === 'LOGIN'
            #login user
        elsif type == 'SIGNUP'
            User.create( user_params.except(:type) )            
        end
        render json: {message:'sucess', status: 200}
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email, :type)
    end

end