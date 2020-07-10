class User < ApplicationRecord

    #ASSOCIATIONS

    has_secure_password
    #has_secure_token :id_token


end