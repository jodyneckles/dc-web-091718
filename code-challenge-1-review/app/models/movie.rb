class Movie

  attr_reader :title, :genre

  @@all = []

  def initialize(name, genre)
    @title = name
    @genre = genre
    self.class.all << self
  end

  def self.all
    @@all
  end

  def self.find_by_title(name)
    # search all movies
    # find one that matches name
    self.all.find do |movie|
      movie.title == name
    end
  end

  def showtimes
    Showtime.all.select do |showtime|
      showtime.movie == self
    end
  end

  def theaters
    showtimes.map do |showtime|
      showtime.theater
    end
  end

end
