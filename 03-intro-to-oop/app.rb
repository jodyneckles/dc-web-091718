# ella = {name:  "Ella", floofiness: 8}

# puts ella[:name]

# ella.say_hello # "Hi I'm Ella"
class Cat

    # attr_reader :color
    # attr_writer :color
    attr_accessor :color, :fluffiness
    attr_reader :name, :number_of_legs

    def initialize(name, fluffiness, number_of_legs=4)
        @name = name
        @fluffiness = fluffiness
        @number_of_legs = number_of_legs
    end

    # def name=(cat_name) # setter
    #     @name = cat_name
    # end

    # def name # getter
    #     @name
    # end

    def say_hello
        "Hi my name is #{@name}"
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
puts ella.number_of_legs

lexi = Cat.new("Lexi", 4, 3)
puts lexi.number_of_legs
# ella.name = "Ella" # ella.send(:name=, "Ella")
# ella.fluffiness = 10
# puts "Ella is #{ella.color}"
# ella.color = "black"
# puts ella.color


# puts ella.name
# ella.set_name_anyway=("Heathcliff")
# puts ella.name
# ella.name = "garfield"
# lexi = Cat.new("Lexi", 4)
# lexi.name = "Lexi"
# lexi.fluffiness = 4
# puts ella.say_hello
