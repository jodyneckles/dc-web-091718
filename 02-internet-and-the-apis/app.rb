require 'rest-client'
require 'json'
require 'pry'


GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="


def welcome
    puts "Welcome to the Book Searcher!"
end

def get_search_input
    puts "Please enter your search query: "
    search_terms = gets.chomp
    puts "\n\n"
    return search_terms
end

def sanitize_input(search_terms)
    search_terms.gsub!(" ", "+")
end

def fetch_book_json(search_terms)
    search_url = GOOGLE_BOOKS_API_BASE_URL + search_terms
    response = RestClient.get(search_url)
    json_response = JSON.parse(response)
end

def get_title(book)
    book["volumeInfo"]["title"]
end

def get_authors(book)
    authors = book["volumeInfo"]["authors"]
    if authors
        authors.join(", ")
    else
        authors = "Anonymous"
    end
end

def display_result(title, authors)
    puts "#{title} by #{authors}"
    puts "*****************\n"
end

def run
    welcome
    search_terms = get_search_input
    sanitized_search_terms = sanitize_input(search_terms)
    book_json = fetch_book_json(sanitized_search_terms)
    # iterate over book_json
    book_json["items"].each do |book|
        # get title
        title = get_title(book)
        # get author(s)
        authors = get_authors(book)
        # display result to user

        display_result(title, authors)
    end
end

run