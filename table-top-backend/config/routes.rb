Rails.application.routes.draw do

  post '/users/login', to: 'users#login'
  post '/games/load', to: 'games#load'
  post '/games/create', to: 'games#newGameRoom'
  post '/games/delete', to: 'games#delete'

end
