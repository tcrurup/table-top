Rails.application.routes.draw do

  mount ActionCable.server => '/cable'

  post '/users/delete', to: 'users#destroy'
  
  post '/users/login', to: 'users#login'
  
  post '/games/load', to: 'games#load'
  post '/games/create', to: 'games#new_game_room'
  post '/games/delete', to: 'games#destroy'

  
end
