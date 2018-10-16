Rails.application.routes.draw do


    resources :snacks
    resources :retailers, only: [:index, :show, :new, :create]
    get "/", to: "snacks#welcome"
end
