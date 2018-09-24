class Bakery

    attr_reader :name

    @@all = []

    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end


    def desserts 
        #return an array of desserts the bakery makesfs
        # look at each dessert instance and see if 
        # we have the right bakery
        Dessert.all.select do |dessert_instance|
            dessert_instance.bakery == self
        end
    end

    def ingredients
        # return an array of ingredients 
        # for  the bakery's desserts
        # return_value = []
        # get all bakery's desserts
        self.desserts.map do |dessert|
            # 'dessert' is Dessert Instance
            # find the ingredients for each of
            # those desserts
            dessert.ingredients
        end.flatten
    end

    def shopping_list
        # should return a string of names for 
        # ingredients for the bakery
        self.ingredients.map do |ing|
            ing.name
        end
    end

    def average_calories
    #     # should return a number totaling the average number 
    #     # of calories for the desserts sold at this bakery
        num_of_desserts = self.desserts.count
        total_calories = 0.0
        self.desserts.each do |dessert|
            total_calories += dessert.calories
        end
        return total_calories / num_of_desserts
    end
end