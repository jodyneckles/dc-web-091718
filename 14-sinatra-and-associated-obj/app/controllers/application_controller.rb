class ApplicationController < Sinatra::Base

    set :method_override, true

    get "/" do
        erb :home
    end

end
