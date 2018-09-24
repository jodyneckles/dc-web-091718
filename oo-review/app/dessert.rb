class Dessert

    attr_reader :bakery, :name

    @@all = []

    def initialize(name, bakery)
        @name = name
        @bakery = bakery
        @@all << self
    end

    def self.all 
        @@all
    end

    def ingredients
        # return an array of ingredients for the dessert
        Ingredient.all.select do |ingredient|
            ingredient.dessert == self
        end
    end

    def calories   
        # returns sum of calories for all ingredients for this dessert
        all_calorie_counts = self.ingredients.collect do |ingredient|
            ingredient.calorie_count
        end
        all_calorie_counts.inject(0, :+)
    end
end