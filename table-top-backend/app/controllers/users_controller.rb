class UsersController < ApplicationController
    
    def login
        type = user_params[:type]        
        
        
        if type === 'LOGIN'
            attemptLogin(user_params.except(:type))            
        elsif type == 'SIGNUP'
            User.create( user_params.except(:type) )            
        end
    end

    def user=(user_object) 
        @user = user_object
    end 
    
    def user 
        @user
    end

    private

    def attemptLogin(user_params)        
        self.user = User.find_by(username: user_params[:username])
        password = user_params[:password]

        self.user ? authenticatePassword(password) : onLoginFailure('user not found')
    end

    def authenticatePassword(password)
        self.user.authenticate(password) ? onLoginSuccess() : onLoginFailure('incorrect password')
    end

    def onLoginSuccess
        render json: UserSerializer.new(self.user).to_serialized_json, status: 200
    end

    def onLoginFailure(message = "")
        render json: { errors: message, user: {} }
    end

    def user_params
        params.require(:user).permit(:username, :password, :email, :type)
    end

end