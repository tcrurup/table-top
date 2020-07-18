class UserFriend < ApplicationRecord

    belongs_to :user
    
    belongs_to :friend, primary_key: :user_id
end