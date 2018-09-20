require 'pry'

class Tweet

    attr_reader :message, :user

    @@all = []

    def initialize(message, user)
        @message, @user = message, user
        @@all << self
    end

    def self.all
        # returns all Tweets
        # binding.pry

        @@all
    end
end