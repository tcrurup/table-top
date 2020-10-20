class FriendSerializer

    def initialize(friend_object)
        @friend = friend_object
    end

    def to_serialized_json
        options = {
            only: [:id, :username]
        }
        @friend.to_json(options)
    end

end