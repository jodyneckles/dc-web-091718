Rails.application.routes.draw do
  resources :adoptions
  resources :owners
  resources :pets
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
