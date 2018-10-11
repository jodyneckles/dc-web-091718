# By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

def fibonacci(n)
  if n <= 1
    return 1
  else 
    return fibonacci(n-1) + fibonacci(n-2)
  end
end

n = 2
sum = 0
current_fibonacci = 0
while current_fibonacci < 4 * 10**6
  current_fibonacci = fibonacci(n)
  if current_fibonacci.even?
    sum += current_fibonacci    
  end
  n += 1
end
puts sum

