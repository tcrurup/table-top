class UsersController < ApplicationController

    def login

        type = user_params[:type]        
        
        
        if type === 'LOGIN'
            attemptLogin(user_params.except(:type))            
        elsif type == 'SIGNUP'
            User.create( user_params.except(:type) )            
        end
        render json: {message:'sucess', status: 200}
    end

    private

    def attemptLogin(user_params)        
        user = User.find_by(username: user_params[:username])
        password = user_params[:password]

        user ? authenticatePassword(user, password) : onLoginFailure('not found')
    end

    def authenticatePassword(user, password)
        user.authenticate(password) ? onLoginSuccess() : onLoginFailure('wrong password')
    end

    def onLoginSuccess
        puts 'login success'
    end

    def onLoginFailure(message = "")
        puts message
    end

    def user_params
        params.require(:user).permit(:username, :password, :email, :type)
    end

end