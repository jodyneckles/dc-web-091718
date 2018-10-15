Rails.application.routes.draw do

    resources :snacks
    get "/", to: "snacks#welcome"
end
