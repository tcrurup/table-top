Rails.application.routes.draw do

  mount ActionCable.server => '/cable'

  post '/users/delete', to: 'users#destroy'
  post '/users/login', to: 'users#login'
  
  post '/games/load', to: 'games#load'
  post '/games/create', to: 'games#new_game_room'
  post '/games/delete', to: 'games#destroy'
  
  post '/friends/friends_of_user', to: 'friends#all_friends_of_user'
  post '/friends/search', to: 'friends#search'

  
end
