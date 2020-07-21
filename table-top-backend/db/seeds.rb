# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
gameRoomNames = [
    "Penumbra"
]


user1 = User.create({
    username: 'tcrurup',
    password: 'tactics',
    email: 'tcrurup@gmail.com'
})

user2 = User.create({
    username: 'bing',
    password: 'bing',
    email: 'bing@gmail.com'
})

gameRoomNames.each_with_index do |name, index|
    user1.create_game_in_slot(name, index + 1)
end



user2.join_game(user1.game_rooms[0].game)

user1.add_friend(user2)
