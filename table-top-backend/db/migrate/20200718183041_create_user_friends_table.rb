class CreateUserFriendsTable < ActiveRecord::Migration[6.0]
  def change
    create_table :user_friends do |t|
      t.integer :user_id
      t.integer :friend_id
    end
  end
end
