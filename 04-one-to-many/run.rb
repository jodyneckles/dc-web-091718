require_relative "./tweet.rb"
require_relative "./user.rb"
require 'pry'

coffee_dad = User.new("Coffee Dad")
puts coffee_dad.username

tweet1 = Tweet.new("I need coffee", coffee_dad)
tweet2 = Tweet.new("I love coffee", coffee_dad)
tweet3 = Tweet.new("Life is a meaningless void", coffee_dad)

puts tweet2.user 
puts tweet2.message

# binding.pry
puts Tweet.all == [tweet1, tweet2, tweet3]
puts "I heart Ruby"