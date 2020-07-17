module ApplicationCable
  class Connection < ActionCable::Connection::Base

    identified_by :current_user
    
    def connect
      self.current_user = self.find_verified_user
    end


    private

    def find_verified_user
      puts 'trying to find the user'
      return User.all.first.id
      #Make sure to write verification for the user
    end
  end
end
