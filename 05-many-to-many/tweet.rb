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
        @@all
    end

    def username
        self.user.username
    end

    def likers
        # returns a collection of all the Users who have liked this tweet

        # get all the likes
        all_likes = Like.all
        # look through and select the ones that have given tweet 
        selected_likes = all_likes.select do |like|
            like.tweet == self
        end
        # get user objects associated with that like
        selected_likes.map do |like|
            like.user
        end
    end
end