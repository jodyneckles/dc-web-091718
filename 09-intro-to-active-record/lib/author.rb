class Author

    attr_accessor :name, :id

    def initialize(name, id=nil)
        @name = name
        @id = id
    end

    def self.create(name)
        # instantiate a new Ruby author
        author = Author.new(name)
        # save it to the database
        create_new_author = "INSERT INTO authors (name) values (?)"
        DB.execute(create_new_author, author.name) 
        id = DB.execute("SELECT last_insert_rowid()")[0][0]
        author.id = id
        author
    end

    def self.find(id)
        # Author.find(2) 
        # [[2, "Judy Blume"]]
        # returns author object (Judy Blume)
        sql = "SELECT * FROM authors WHERE authors.id = ?"
        results = DB.execute(sql, id)
        Author.make_object_from_row(results[0])
    end

    def self.make_object_from_row(row)
        author = Author.new(row[1], row[0])
    end

    def self.all
        sql = "SELECT * FROM authors"
        results = DB.execute(sql)
        results.map do |row|
            Author.make_object_from_row(row)
        end
    end
end