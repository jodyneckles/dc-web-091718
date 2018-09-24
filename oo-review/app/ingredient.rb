class Ingredient

    attr_reader :calorie_count, :dessert, :name
    
    @@all = []

    def initialize(calorie_count, dessert, name)
        @calorie_count = calorie_count
        @dessert = dessert
        @name = name
        # @tasty = true
        @@all << self
    end

    def self.all
        @@all
    end

    # def calorie_count
    #     @calorie_count
    # end
end