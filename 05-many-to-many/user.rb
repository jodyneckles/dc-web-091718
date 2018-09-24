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

    def like_tweet(tweet)
        Like.new(self, tweet)
    end

    def liked_tweets
        # returns array of all tweets this user has liked
        # get all Likes
        all_likes = Like.all
        # see if User on Like is self
        likes_by_user = all_likes.select do |like|
            like.user == self
        end
        # make an array of tweets from the selected likes
        likes_by_user.collect do |like|
            like.tweet
        end
    end

    def unlike_tweet(unlikable_tweet)
        # go through all likes
        # find like connecting user and tweet
        bad_like = Like.all.find do |like|
            like.user == self && like.tweet == unlikable_tweet
        end
        # delete it
        Like.all.delete(bad_like)
    end

end


