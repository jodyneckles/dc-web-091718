## Deliverables

### Basic Class Methods and Properties

#### Build the following methods on the `Movie` class

- `Movie.all`
  - should return **all** of the movie instances
- `Movie.find_by_title(name)`
  - given a string of a **full name**, returns the **first movie** whose full name matches
- `Movie#showtimes`
  - returns an **array** of all the showtimes for the given movie
- `Movie#theaters`
  - returns an **array** of all the theaters playing the given movie
- `Movie#genre`
  - returns the genre object of the given movie

---

#### Build out the following methods on the `Theater` class

- `Theater.all`
  - returns an array of all theaters
- `Theater.find_by_name(name)`
  - given a string of a theater name, returns the first theater that matches
- `Theater#showtimes`
  - returns an **array** of all the showtimes at a given theater
- `Theater#movies`
  - returns an **array** of all the movies at a given theater
- `Theater#genres`
  - returns an **array** of all the **unique** genres at a given theater
- `Theater#play_movie(movie, time)`
  - given an instance of Movie, creates a new Showtime for that movie at the given theater

---

#### Build out the following methods on the `Genre` class

- `Genre.all`
  - returns and array of all genres
- `Genre.find_by_name(name)`
  - given a string of a genre name, returns the first genre that matches
- `Genre#movies`
  - returns an **array** of all movies of the given genre
- `Genre#theaters`
  - returns an **array** of all the **unique** theaters with all movies of the given genre
- `Genre#showtimes`
  - returns an **array** of all the showtimes for all movies of the given genre

#### Build out the following methods on the `Showtime` class

- `Showtime.all`
  - returns all of the showtimes
- `Showtime#movie`
  - returns the movie object for the given showtime
- `Showtime#theater`
  - returns the theater object for that given showtime
- `Showtime#genre`
  - returns the genre of the movie for the given showtime

---
