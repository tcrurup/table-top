Rails.application.routes.draw do

  post '/users/login', to: 'users#login'

end
