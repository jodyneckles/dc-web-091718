class ApplicationController < ActionController::Base

    helper_method :current_user

    # memoization

    def current_user
        # @current_user ||= User.find(session[:user_id]).username
        if @current_user
            @current_user
        else
            @current_user = User.find(session[:user_id]).username
        end
    end
end
