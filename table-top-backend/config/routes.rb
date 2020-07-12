Rails.application.routes.draw do

  post '/users/login', to: 'users#login'
  post '/games/load', to: 'games#load'

end
