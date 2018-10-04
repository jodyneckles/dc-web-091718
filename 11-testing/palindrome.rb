require 'pry'
class PalindromeChecker

    def is_palindrome?(str)
        raise ArgumentError if !(str.is_a? String)
        str.downcase!
        str.gsub!(/[^a-z0-9\s]/, "")
        if str.length <= 1
            return true
        elsif str[0] != str[-1]
            return false
        else
            return is_palindrome?(str[1..-2])
        end
    end

end