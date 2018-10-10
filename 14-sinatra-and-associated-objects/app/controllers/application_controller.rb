class ApplicationController < Sinatra::Base

    set :views, "app/views"
    set :method_override, true

    get "/" do
        erb :home
    end

    get "/books" do 
        @books = Book.all
        erb :index
    end

    get "/books/new" do 
        erb :new
    end
    
    get "/books/:id" do
        id = params[:id]
        @book = Book.find(id)
        erb :show
    end

    post "/books" do
        title = params["title"]
        author = params["author"]
        snippet = params["snippet"]
        book = Book.create(title: title, author: author, snippet: snippet)
        redirect "books/#{book.id}"
    end

    get "/books/:id/edit" do
        @book = Book.find(params[:id])
        erb :edit
    end

    patch "/books/:id" do 
        book = Book.find(params[:id])
        title = params["title"]
        author = params["author"]
        snippet = params["snippet"]
        book.update(title: title, author: author, snippet: snippet)
        redirect "books/#{book.id}"
    end

    delete "/books/:id" do
        book = Book.find(params[:id])
        book.destroy
        redirect "books"
    end

end
