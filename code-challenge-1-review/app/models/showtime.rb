class Showtime

  attr_reader :movie
  attr_reader :theater
  @@all = []

  def initialize(movie, theater)
    @movie = movie
    @theater = theater
    @@all << self
  end

  def self.all
    @@all
  end
end
