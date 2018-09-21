class User

    attr_reader :username

    def initialize(username)
        @username = username
    end

    def tweets
        # returns array of tweets posted by this user

        # look through all the tweets
        Tweet.all.select do |tweet|
        # match the tweets where tweet's user matches self and return
            tweet.user == self
        end
    end

    def post_tweet(message)
        # that takes a message, creates a new tweet, and adds it to the user's tweet collection
        Tweet.new(message, self)
    end
end


