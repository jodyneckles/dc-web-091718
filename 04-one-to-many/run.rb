require_relative "./tweet.rb"
require_relative "./user.rb"
require 'pry'

coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")
# puts coffee_dad.username

tweet1 = coffee_dad.post_tweet("I need coffee")
tweet2 = Tweet.new("I love coffee", coffee_dad)
tweet3 = Tweet.new("Life is a meaningless void", coffee_dad)
tweet4 = Tweet.new("Tea is yummy", tea_uncle)
# puts tweet2.user 
# puts tweet2.message

# binding.pry
puts Tweet.all == [tweet1, tweet2, tweet3, tweet4]
puts tweet1.username == "Coffee Dad"
puts coffee_dad.tweets == [tweet1, tweet2, tweet3]
puts "I heart Ruby"