class ApplicationController < ActionController::Base

    helper_method :current_user

    # memoization

    def current_user
        # @current_user ||= User.find(session[:user_id]).username
        if @current_user
            @current_user
        else
            if session[:user_id]    
                @current_user = User.find(session[:user_id]).username
            else
                @current_user = nil

            end
        end
    end
end
