class Api::V1::AuthController < ApplicationController
  def create # POST /api/v1/login
    byebug

    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password])
      #send back a JWT token
      render json: {message: 'correct username and password'}, status: :accepted
    else
      render json: {message: 'incorrect username or password'}, status: :unauthorized
    end
  end

end
