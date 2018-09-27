require 'bundler'
Bundler.require

DB = SQLite3::Database.new('db/library.db')

require_relative '../lib/book.rb'
require_relative '../lib/author.rb'


# module SQLite3

#     class Database

#         def initialize(database_location)
#             @database_location = database_location
#         end


#         def execute(sql)
#             # executes sql
#         end

#     end

# end

# DB.execute("SELECT * FROM books")