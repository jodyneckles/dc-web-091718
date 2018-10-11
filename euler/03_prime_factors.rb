require 'prime'

def prime(integer)
    primes = []
    (2..Math.sqrt(integer)).each do |n|
        # puts n
        if n.prime? && integer % n == 0
            primes << n
        end
    end
    return primes
end

# def is_prime?()

# end

puts prime(600851475143)
# num = 27
# puts num.prime?
# puts Prime.first 5