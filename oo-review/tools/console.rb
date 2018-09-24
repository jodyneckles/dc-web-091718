require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

bakery1 = Bakery.new("Tom's Bakery")
bakery2 = Bakery.new("Tina's Bakery")

chocolate_cake = Dessert.new("chocolate cake", bakery1)
baked_alaska = Dessert.new("Baked Alaska", bakery1)
lemon_meringue = Dessert.new("Lemon Meringue", bakery2)

eggs = Ingredient.new(151, chocolate_cake, "eggs")
lemons = Ingredient.new(30, lemon_meringue, "lemons")
sugar = Ingredient.new(200, lemon_meringue, "sugar")


puts "gets all desserts?"
puts Dessert.all == [chocolate_cake, baked_alaska, lemon_meringue]

puts "gets desserts for bakery1?"
puts bakery1.desserts == [chocolate_cake, baked_alaska]

puts "gets ingredients for bakery1?"
puts bakery1.ingredients == [eggs]

puts "gets ingredients for lemon meringue?"
puts lemon_meringue.ingredients == [lemons, sugar]

puts "gets string of names for ingredients of bakery1?"
puts bakery1.shopping_list == ["eggs"]b

puts "gets bakery object for dessert?"
puts chocolate_cake.bakery == bakery1

puts "gets total calories for all ingredients in dessert?"
puts baked_alaska.calories == 0
puts lemon_meringue.calories == 230

puts "gets average number of calories for bakery?"
puts bakery1.average_calories == 75.5 # (151 + 0) / 2
Pry.start