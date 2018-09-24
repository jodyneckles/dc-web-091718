class Theater

  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def showtimes
    Showtime.all.select do |showtime|
      showtime.theater == self
    end
  end

  def movies
    showtimes.map do |showtime|
      showtime.movie
    end
  end

end
