class Tweet

    attr_reader :message, :user
    
    def initialize(message, user)
        @message, @user = message, user
    end

end