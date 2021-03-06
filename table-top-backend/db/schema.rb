# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_19_023429) do

  create_table "chat_rooms", force: :cascade do |t|
    t.integer "game_id"
  end

  create_table "game_rooms", force: :cascade do |t|
    t.integer "user_id"
    t.integer "game_id"
  end

  create_table "games", force: :cascade do |t|
    t.integer "game_room_id"
    t.string "name"
    t.integer "player_id"
  end

  create_table "messages", force: :cascade do |t|
    t.integer "chat_room_id"
    t.integer "sender_id"
    t.text "content"
  end

  create_table "player_games", force: :cascade do |t|
    t.integer "player_id"
    t.integer "game_id"
  end

  create_table "user_friends", force: :cascade do |t|
    t.integer "user_id"
    t.integer "friend_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
  end

end
