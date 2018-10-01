With a partner or group:

1.  Write the SQL to create tables for Books (id, title, author_id) and Authors (id, name)

author_sql = <<-SQL
    CREATE TABLE IF NOT EXISTS authors (
        id INTEGER PRIMARY KEY,
        name TEXT
        );
SQL

book_sql = <<-SQL
    CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY,
        title TEXT,
        author_id INTEGER
    );
SQL


2.  Write the SQL to get all Books

3.  Write the SQL to get all Authors

    "SELECT * FROM authors"
    
4.  Write the SQL to create a new book, given the title and author id

5.  Write the SQL to create a new author, given the author's name

    create_new_author = <<-SQL
        INSERT INTO authors (name) values (?)

    SQL 

6.  Write the SQL to get all Books by a given author, given the author's id

7.  Write the SQL to get all Books by a given author, given the author's name

8.  Write the SQL to update a Book's title
