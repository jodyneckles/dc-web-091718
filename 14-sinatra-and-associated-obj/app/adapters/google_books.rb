module GoogleBooks
  class Adapter
    BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

    attr_reader :author

    def initialize(author)

      author_name = "#{} #{author.split[1]}"
      @author = Author.find_or_create_by(first_name: author.split[0],
                                         last_name: author.split[1])
    end

    def fetch_books
      books = JSON.parse(RestClient.get(author_url))

      books['items'].each do |item|
        book = ::Book.new
        book.author = @author
        book.title = item['volumeInfo']['title']
        book.snippet = item['volumeInfo']['description']

        book.save
      end
    end

    private

    def author_url(max_results = 20)
      "#{BASE_URL}#{@author.author_sanitizer}&maxResults=#{max_results}"
    end


  end
end
