class School

    attr_reader :name, :location, :instructors

    def initialize(name, location)
        @name = name
        @location = location
        @instructors = []
    end

    def add_instructor(instructor)
        @instructors << instructor
    end

    # def instructors
    #     @instructors.map do |instructor|
    #         instructor.name
    #     end
    # end

end

class Instructor

    attr_accessor :name

    def initialize(name)
        @name = name
    end

end

flatiron = School.new("Flatiron", "Washington DC")
paul = Instructor.new("Paul")
melanie = Instructor.new("Melanie")
jakie = Instructor.new("Jakie")

flatiron.add_instructor(paul)
flatiron.add_instructor(melanie)
flatiron.add_instructor(jakie)
print flatiron.instructors
print "\n\n"

jakie.name = "Jake"
jake = jakie
print flatiron.instructors

print jakie

