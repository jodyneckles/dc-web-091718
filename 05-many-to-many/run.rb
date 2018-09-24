require_relative "./tweet.rb"
require_relative "./user.rb"
require_relative "./like.rb"
require 'pry'

coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")
# puts coffee_dad.username

tweet1 = coffee_dad.post_tweet("I need coffee")
tweet2 = coffee_dad.post_tweet("I love coffee")
tweet3 = coffee_dad.post_tweet("Life is a meaningless void")
tweet4 = tea_uncle.post_tweet("Tea is yummy")

like1 = coffee_dad.like_tweet(tweet4)
like2 = tea_uncle.like_tweet(tweet1)
like3 = tea_uncle.like_tweet(tweet3)

puts Tweet.all == [tweet1, tweet2, tweet3, tweet4]
puts tweet1.username == "Coffee Dad"
puts coffee_dad.tweets == [tweet1, tweet2, tweet3]

puts "Gets all likes: "
puts Like.all == [like1, like2, like3]

puts "Gets liked tweets"
puts coffee_dad.liked_tweets == [tweet4]
puts tea_uncle.liked_tweets == [tweet1, tweet3]

puts "gets users who liked given tweet"
puts tweet1.likers == [tea_uncle]
puts tweet1.likers
puts tweet2.likers == []

puts "can unlike a tweet"
coffee_dad.unlike_tweet(tweet4)
puts coffee_dad.liked_tweets == []
# binding.pry
puts "I heart Ruby"