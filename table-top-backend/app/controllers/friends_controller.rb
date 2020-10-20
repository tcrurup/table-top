class FriendsController < ApplicationController

    def all_friends_of_user
        self.set_user
        render json: self.serialize(self.user.friends)
    end

    def search
        self.set_user
        render json: self.serialize(User.find_by username: friend_params[:search_input])
    end
    
    private

    def friend_params
        params.require(:friend).permit(:user_id, :search_input)
    end 

    def set_user
        self.user = User.find(friend_params[:user_id])
    end

    def serialize(friend_obj)
        FriendSerializer.new(friend_obj).to_serialized_json
    end
    
    def user
        @user
    end

    def user=(user_object)
        @user=user_object
    end

end