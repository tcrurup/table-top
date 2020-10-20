class FriendsController < ApplicationController

    def all_friends_of_user
        self.user = User.find(friend_params[:user_id])
        render json: FriendSerializer.new(self.user.friends).to_serialized_json
    end

    def search
        self.user = User.find(friend_params[:user_id])
        render json: FriendSerializer.new(User.find_by username: friend_params[:search_input]).to_serialized_json 
    end

    def friend_params
        params.require(:friend).permit(:user_id, :search_input)
    end    

    def user
        @user
    end

    def user=(user_object)
        @user=user_object
    end

end