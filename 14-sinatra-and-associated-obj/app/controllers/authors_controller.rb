class AuthorsController < ApplicationController

    set :views, "app/views/authors"
    
    get "/authors" do
        @authors = Author.all
        erb :index
    end

    get "/authors/new" do
        erb :new
    end

    post "/authors" do
        # {"first_name"=>"Isaac",
        #  "last_name"=>"Asimov",
        #  "book"=>{"title"=>"I Robot", "snippet"=>"Robots are neat"}}
        # binding.pry
        first_name = params[:first_name]
        last_name = params[:last_name]
        author = Author.create(first_name: first_name, last_name: last_name)
        params[:book].each do |book_params|
            book_title = book_params[:title]
            book_snippet = book_params[:snippet]
            Book.create(title: book_title, snippet: book_snippet, author: author)
        end
        redirect "/authors/#{author.id}"
    end

    get "/authors/:id" do 
        @author = Author.find(params[:id])
        erb :show
    end
end