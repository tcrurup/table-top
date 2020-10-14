class FriendsController < ApplicationController

    def all_friends_of_user
        self.user = User.find(friend_params[:user_id])
        render json: self.user.friends
    end

    def friend_params
        params.require(:friend).permit(:user_id)
    end

    def user
        @user
    end

    def user=(user_object)
        @user=user_object
    end

end