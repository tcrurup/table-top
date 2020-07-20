class UsersController < ApplicationController
    
    def login
        type = user_params[:type]        
        if type === 'LOGIN'
            attemptLogin(user_params.except(:type))            
        elsif type == 'SIGNUP'
            createUser(user_params.except(:type))         
        end
    end

    def user
        @user
    end

    def user=(user_object)
        @user=user_object
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

    def createUser(user_params)
        user_params
        user = User.new( user_params.except(:type) )
        if user.valid?
            user.save
            render json: UserSerializer.new(user).to_serialized_json
        else 
            render json: { errors: user.errors.full_messages }, status: 401
        end
        
    end

    def onLoginSuccess
        render json: UserSerializer.new(self.user).to_serialized_json
    end

    def onLoginFailure(message = "")
        render json: { errors: [message] }, status: 401
    end

    def user_params
        params.require(:user).permit(:username, :password, :email, :type)
    end

end