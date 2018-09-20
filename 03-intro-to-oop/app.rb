class Cat

    # attr_reader :color
    # attr_writer :color
    attr_accessor :color, :fluffiness
    attr_reader :number_of_legs

    @@all = []

    def initialize(name, fluffiness, number_of_legs=4)
        @name = name
        @fluffiness = fluffiness
        @number_of_legs = number_of_legs
        @@all << self
        # when self is inside a method, "self" refers to the instance of the object
    end

    def self.all
        # when self is in _method name_ self refers to the class
        @@all
    end
    # def name=(cat_name) # setter
    #     @name = cat_name
    # end

    # def name # getter
    #     @name
    # end

    def name
        puts "Hi my name is #{@name}"
    end
    
    def self.get_all_names_of_cats # class method (because of 'self')
        @@all.each do |cat|
            puts cat.name
        end
    end

    def say_hello # instance method (no 'self' in method name)
        "Hi my name is #{@name}"
    end

    def print_all_attributes
        
        puts self.name # calls getter method
        puts @name # directly gets instance variable

        # puts self.fluffiness
        # puts self.number_of_legs


    end

    # def set_name_anyway=(new_name)
    #     @name = new_name
    # end
    # attr_accessor :fluffiness
    # VVVVVVVVVVV

    # def fluffiness=(fluffiness)
    #     @fluffiness = fluffiness
    # end

    # def fluffiness
    #     @fluffiness
    # end

    # def color=(color)
    #     @color = color
    # end

    # def color
    #     @color
    # end

end

ella = Cat.new("Ella", 10)
lexi = Cat.new("Lexi", 4, 3)
# puts ella.all == lexi.all
garfield = Cat.new("Garfield", 3)

# print garfield.all
# Cat.get_all_names_of_cats

ella.print_all_attributes